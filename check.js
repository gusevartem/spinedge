import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Конфигурация
const config = {
    publicDir: path.join(__dirname, 'public'),
    projectRoot: __dirname,
    imageExtensions: ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico'],
    ignoreDirs: ['node_modules', 'dist', '.git', '.vscode', '.idea', 'public'],
    ignoreFiles: ['.DS_Store', 'thumbs.db'],
    // Дополнительные паттерны для поиска (RegExp)
    searchPatterns: [
        /['"`]\/?([^'"`]+\.(png|jpg|jpeg|gif|svg|webp|ico))['"`]/gi,
        /url\(['"]?\/?([^'"\)]+\.(png|jpg|jpeg|gif|svg|webp|ico))['"]?\)/gi,
        /%PUBLIC_URL%\/[^'"\s]+\.(png|jpg|jpeg|gif|svg|webp|ico)/gi
    ]
};

// 1. Собираем все изображения из public
const allImages = new Set();
function scanPublicImages(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (config.ignoreFiles.includes(file)) return;

        if (stat.isDirectory()) {
            scanPublicImages(fullPath);
        } else if (config.imageExtensions.some(ext => file.endsWith(ext))) {
            const relativePath = path.relative(config.publicDir, fullPath);
            allImages.add(relativePath.replace(/\\/g, '/')); // Нормализуем пути
        }
    });
}
scanPublicImages(config.publicDir);

// 2. Ищем использования во всех файлах проекта
const usedImages = new Set();
function scanProjectFiles(dir) {
    if (config.ignoreDirs.some(ignoreDir => path.join(dir).includes(ignoreDir))) {
        return;
    }

    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanProjectFiles(fullPath);
        } else if (!config.ignoreFiles.includes(file)) {
            try {
                const content = fs.readFileSync(fullPath, 'utf-8');

                // Проверяем все заданные паттерны
                config.searchPatterns.forEach(pattern => {
                    let match;
                    while ((match = pattern.exec(content)) !== null) {
                        const imgPath = match[1] || match[0].replace(/%PUBLIC_URL%/, '');
                        if (imgPath) {
                            // Нормализуем путь для сравнения
                            const normalizedPath = imgPath.startsWith('/')
                                ? imgPath.slice(1)
                                : imgPath;
                            usedImages.add(normalizedPath);
                        }
                    }
                });
            } catch (e) {
                console.warn(`⚠️ Could not read: ${fullPath}`, e.message);
            }
        }
    });
}
scanProjectFiles(config.projectRoot);

// 3. Сравниваем и выводим результат
const unusedImages = [...allImages].filter(img => !usedImages.has(img));
console.log('🚀 Used images count:', usedImages.size);
console.log('🗑️ Unused images:', unusedImages.length);
console.log(unusedImages.join('\n'));

// 4. Опциональное удаление (раскомментируйте)

unusedImages.forEach(img => {
    const fullPath = path.join(config.publicDir, img);
    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
        console.log(`✅ Deleted: ${img}`);
    }
});
