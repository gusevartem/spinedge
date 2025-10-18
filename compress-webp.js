import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFolder = path.join(__dirname, "public");
const outputFolder = path.join(__dirname, "public_compressed");

const compressExtensions = [".jpg", ".jpeg", ".png", ".webp"];

async function processFolder(currentInputFolder, currentOutputFolder) {
    if (!fs.existsSync(currentOutputFolder)) {
        fs.mkdirSync(currentOutputFolder, { recursive: true });
    }

    const files = fs.readdirSync(currentInputFolder);

    for (const file of files) {
        const inputPath = path.join(currentInputFolder, file);
        const outputPath = path.join(currentOutputFolder, file);
        const stats = fs.statSync(inputPath);

        if (stats.isDirectory()) {
            await processFolder(inputPath, outputPath);
        } else {
            const ext = path.extname(file).toLowerCase();

            if (compressExtensions.includes(ext)) {
                try {
                    let image = sharp(inputPath).resize({
                        width: 1920,
                        withoutEnlargement: true,
                    });

                    let outputPathFinal = outputPath; // по умолчанию — исходное расширение

                    if (ext === ".jpg" || ext === ".jpeg") {
                        image = image.jpeg({ quality: 20, mozjpeg: true });
                    } else if (ext === ".png") {
                        // Конвертируем PNG в WebP
                        fs.copyFileSync(inputPath, outputPath);
                        console.log(`ℹ️ Скопировано: ${outputPath}`);
                        image = image.webp({ quality: 20 });
                        outputPathFinal = path.join(
                            currentOutputFolder,
                            path.basename(file, ext) + ".webp"
                        );
                    } else if (ext === ".webp") {
                        image = image.webp({ quality: 20 });
                    }

                    await image.toFile(outputPathFinal);
                    console.log(`✅ Сжат и сохранён: ${outputPathFinal}`);
                } catch (err) {
                    console.error(`❌ Ошибка сжатия ${inputPath}:`, err);
                }
            } else {
                fs.copyFileSync(inputPath, outputPath);
                console.log(`ℹ️ Скопировано: ${outputPath}`);
            }
        }
    }
}

processFolder(inputFolder, outputFolder)
    .then(() => console.log("🎉 Сжатие завершено!"))
    .catch((err) => console.error("Ошибка:", err));
