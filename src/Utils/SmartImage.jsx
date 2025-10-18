import React, { useEffect, useState } from "react";

const SmartImage = ({ src, alt = "", className = "" }) => {
    const [isLowQuality, setIsLowQuality] = useState(false);
    const [isOnline, setIsOnline] = useState(
        typeof navigator !== "undefined" ? navigator.onLine : true
    );

    // --- Генерация lowSrc ---
    const computedLowSrc = src
        ? "/low_quality/" + src.replace(/^\/|^\.\//, "") // удаляем ведущий / или ./
        : "";

    // --- Функция для детекции Safari ---
    const isSafari = () => {
        if (typeof navigator === "undefined") return false;
        const ua = navigator.userAgent;
        return /Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR/.test(ua);
    };

    useEffect(() => {
        const checkConnection = () => {
            if (isSafari()) {
                // В Safari всегда low-quality
                setIsLowQuality(true);
            } else if ("connection" in navigator && navigator.connection) {
                const connection = navigator.connection;
                const slow =
                    connection.effectiveType === "2g" ||
                    connection.effectiveType === "3g" ||
                    connection.downlink < 1;
                setIsLowQuality(slow);
            } else {
                setIsLowQuality(false);
            }
        };

        const handleOnline = () => {
            setIsOnline(true);
            checkConnection();
        };
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        if ("connection" in navigator && navigator.connection)
            navigator.connection.addEventListener("change", checkConnection);

        checkConnection();

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
            if ("connection" in navigator && navigator.connection)
                navigator.connection.removeEventListener("change", checkConnection);
        };
    }, []);

    if (!isOnline) {
        return (
            <div
                className={`bg-gray-200 text-gray-500 flex items-center justify-center ${className}`}
                style={{ width: "100%", paddingTop: "100%", position: "relative" }}
            >
                <span
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    Нет соединения
                </span>
            </div>
        );
    }

    const imageToShow = isLowQuality ? computedLowSrc : src;

    return (
        <img
            loading="lazy"
            src={imageToShow}
            alt={alt}
            className={className}
            style={{ width: "100%", height: "auto" }}
        />
    );
};

export default SmartImage;
