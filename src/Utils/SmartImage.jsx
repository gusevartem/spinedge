import React, { useEffect, useState } from "react";

const SmartImage = ({ src, lowSrc, alt = "", className = "" }) => {
    const [isLowQuality, setIsLowQuality] = useState(false);
    const [isOnline, setIsOnline] = useState(
        typeof navigator !== "undefined" ? navigator.onLine : true
    );

    // --- Генерация lowSrc ---
    const computedLowSrc = lowSrc || (() => {
        if (!src) return "";

        try {
            let resultSrc = src;

            // Если пути начинаются с './', убираем точку для единообразия
            if (resultSrc.startsWith("./")) resultSrc = resultSrc.slice(1);

            // Если уже есть low_quality — возвращаем как есть
            if (resultSrc.includes("/low_quality/")) return resultSrc;

            // Если путь уже содержит /public/ — вставляем low_quality после него
            if (resultSrc.includes("/public/")) {
                return resultSrc.replace(
                    /\/public\//,
                    "/public/low_quality/"
                );
            }

            // Если /public/ нет — добавляем его в начало
            if (resultSrc.startsWith("/")) {
                return "/public/low_quality" + resultSrc;
            }

            // fallback (например, просто имя файла)
            return "/public/low_quality/" + resultSrc;
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
