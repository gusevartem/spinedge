import { useState, useEffect } from "react";

const ImageModal = ({ imageUrl, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Плавное появление
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Закрытие по клавише Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") handleClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    // Плавное закрытие
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 200); // синхронизировано с анимацией
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            onClick={handleOverlayClick}
        >
            <div className="relative max-h-full max-w-full animate-fadeIn">
                <img
                    src={imageUrl}
                    alt="Modal content"
                    className="max-h-[70vh] w-full h-full max-w-full rounded-lg shadow-lg object-contain transition-transform duration-200"
                />
                <button
                    onClick={handleClose}
                    className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-[#00A968] hover:text-white transition duration-200"
                    aria-label="Close modal"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
