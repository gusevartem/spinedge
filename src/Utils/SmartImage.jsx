import React, { useEffect, useState } from "react";

const SmartImage = ({ src, lowSrc = "", alt = "", className = "" }) => {
    const [isLowQuality, setIsLowQuality] = useState(false);
    const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);

    // --- Генерация пути для lowSrc ---
    const computedLowSrc = lowSrc || (() => {
        // Пример: src = "/Four/left.webp"
        // => "/low_quality/Four/left.webp"
        if (!src) return "";
        try {
            // Разбиваем путь, добавляем префикс /low_quality
            if (src.startsWith("/")) {
                return "/low_quality" + src;
            } else if (src.startsWith("./")) {
                return "./low_quality" + src.slice(1);
            } else {
                return "low_quality/" + src;
            }
        } catch {
            return src;
        }
    })();

    useEffect(() => {
        const checkConnection = () => {
            if ("connection" in navigator) {
                const connection = navigator.connection;
                const slow =
                    connection.effectiveType === "2g" ||
                    connection.effectiveType === "3g" ||
                    connection.downlink < 1;
                setIsLowQuality(slow);
            }
        };

        const handleOnline = () => {
            setIsOnline(true);
            checkConnection();
        };
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        if ("connection" in navigator)
            navigator.connection.addEventListener("change", checkConnection);

        checkConnection();

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
            if ("connection" in navigator)
                navigator.connection.removeEventListener("change", checkConnection);
        };
    }, []);

    // --- Placeholder, если офлайн ---
    if (!isOnline) {
        return (
            <div
                className={`bg-gray-200 text-gray-500 flex items-center justify-center ${className}`}
                style={{ aspectRatio: "1/1" }}
            >
                Нет соединения
            </div>
        );
    }

    // --- Выбор картинки ---
    const imageToShow = isLowQuality ? computedLowSrc || src : src;

    return (
        <img
            loading="lazy"
            src={imageToShow}
            alt={alt}
            className={className}
        />
    );
};

export default SmartImage;
