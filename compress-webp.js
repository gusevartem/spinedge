import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Папка с исходными файлами
const inputFolder = path.join(__dirname, 'public');

// Папка для сжатых файлов
const outputFolder = path.join(__dirname, 'publicc');

// Разрешенные форматы для сжатия
const compressExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Рекурсивная функция обработки папки
 * @param {string} currentInputFolder - текущая папка с исходными файлами
 * @param {string} currentOutputFolder - текущая папка для новых файлов
 */
async function processFolder(currentInputFolder, currentOutputFolder) {
    // Создаем папку назначения, если не существует
    if (!fs.existsSync(currentOutputFolder)) {
        fs.mkdirSync(currentOutputFolder, { recursive: true });
    }

    const files = fs.readdirSync(currentInputFolder);

    for (const file of files) {
        const inputPath = path.join(currentInputFolder, file);
        const outputPath = path.join(currentOutputFolder, file);
        const stats = fs.statSync(inputPath);

        if (stats.isDirectory()) {
            // Рекурсивно заходим в подпапку
            await processFolder(inputPath, outputPath);
        } else {
            const ext = path.extname(file).toLowerCase();

            if (compressExtensions.includes(ext)) {
                try {
                    let pipeline = sharp(inputPath);
                    if (ext === '.jpg' || ext === '.jpeg') {
                        pipeline = pipeline.jpeg({ quality: 20 }); // цель ~50% размера
                    } else if (ext === '.png') {
                        pipeline = pipeline.png({ compressionLevel: 9 });
                    } else if (ext === '.webp') {
                        pipeline = pipeline.webp({ quality: 20 });
                    }

                    await pipeline.toFile(outputPath);
                    console.log(`Сжат: ${outputPath}`);
                } catch (err) {
                    console.error(`Ошибка сжатия ${inputPath}:`, err);
                }
            } else {
                // Просто копируем остальные файлы
                fs.copyFileSync(inputPath, outputPath);
                console.log(`Скопировано: ${outputPath}`);
            }
        }
    }
}

// Запуск
processFolder(inputFolder, outputFolder)
    .then(() => console.log('Обработка завершена!'))
    .catch(err => console.error(err));
