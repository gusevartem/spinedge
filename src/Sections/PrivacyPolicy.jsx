import { useEffect } from "react";
import { gsap } from "gsap";
import NavBar from "../Components/NavBar";
import NineSection from "./NineSection/NineSection";
import Blog from "./Blog";
import PrivatePolicy from "./PrivatePolicy";
import EightSection from "./EightSection/EightSection";
import { useLocation, useParams } from "react-router-dom";

const PrivacyPolicy = ({ isBlog }) => {
    // Получаем параметры URL, если они есть
    const params = useParams(null);
    // Получаем состояние location, если оно передано
    const location = useLocation(null);
    useEffect(() => {
        // Плавный скролл к верху страницы при монтировании компонента
        gsap.to(window, {
            duration: 0.5,
            scrollTo: 0,
            ease: "power2.out"
        });


    }, [location.pathname]);

    return (
        <div className="w-full h-full">
            <NavBar />
            {isBlog ?
                <>
                    <Blog post={params ? params.post : null} />
                    <EightSection />
                </> :
                <>
                    <PrivatePolicy />

                </>}

            <NineSection />
        </div>
    );
};

export default PrivacyPolicy;