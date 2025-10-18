// scripts/removeLowSrc.js
import fs from "fs";
import path from "path";

const root = "./src"; // папка с твоими React-компонентами

function removeLowSrc(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            removeLowSrc(filePath);
        } else if (/\.(jsx|js|tsx|ts)$/.test(file)) {
            let content = fs.readFileSync(filePath, "utf-8");
            const newContent = content.replace(/\s*lowSrc\s*=\s*["'][^"']*["']/g, "");
            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent);
                console.log(`🧹 Cleaned: ${filePath}`);
            }
        }
    }
}

removeLowSrc(root);