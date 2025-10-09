import React, { useEffect, useRef, useState } from 'react'
import Fone from './Fone'
import CustomInput from './CustomInput'
import AnimatedCircle from '../../Components/AnimatedCircle'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom'
import './formst.css'

gsap.registerPlugin(ScrollTrigger)

const NineSection = () => {
  const sectionRef = useRef(null)
  const mainRef = useRef(null)
  const circleRef = useRef(null)
  const blurRef = useRef(null)
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(false); // 🔹 состояние успеха

  const textRef = useRef(null)
  const underlineRef = useRef(null)

  const form = useRef();
  const businnesRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (e) => {
    const v = e.target.value;
    setEmail(v);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(v));
  };

  const handleMouseEnter = () => {
    gsap.to(textRef.current, { opacity: 0.8, duration: 0.3, ease: 'power1.out' });
    gsap.to(underlineRef.current, { width: '100%', duration: 0.3, ease: 'power1.out' });
};

const handleMouseLeave = () => {
    gsap.to(textRef.current, { opacity: 1, duration: 0.3, ease: 'power1.out' });
    gsap.to(underlineRef.current, { width: '0%', duration: 0.3, ease: 'power1.out' });
};
  const handleClickPolicy = () => {
    navigate("/privacy")
}

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!isEmailValid) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm("service_xm6x1wi", "template_prdzevj", form.current, {
        publicKey: "X9V4qVL-0Bv3923Ln",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true); // 🔹 показать текст "Thanks!"
          businnesRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          setEmail("");
          setIsEmailValid(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorMessage("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <Fone id={`nine`}>
      <div
        ref={sectionRef}
        className="w-full h-full relative flex justify-center items-center flex-col z-[15]"
      >
        {/* Если успех, показываем Thanks! */}
        {success ? (
          <p className="gradient-text-green text-center mt-[150px] font-bold sm:text-[50px] text-[30px] leading-[120%] first">
            Thank You For <br />
            Connecting <br />
            with SpinEdge!
        </p>
        ) : (
          <form className="flex flex-col gap-3 FormLol" ref={form}>
            <CustomInput
              name="business"
              ref={businnesRef}
              customStyle="md:w-[730px] w-full"
              placeholder="Business / Website"
              id="first"
            />
            <CustomInput
              name="email"
              ref={emailRef}
              value={email}
              onChange={handleEmailChange}
              customStyle="md:w-[730px] w-full"
              placeholder="E-mail address"
              id="second"
            />
            <CustomInput
              name="message"
              ref={messageRef}
              customStyle="md:w-[730px] w-full"
              isBig={true}
              placeholder="Message / Feedback"
              id="three"
            />
            <button
              onClick={sendEmail}
              disabled={!isEmailValid}
              className={`tracking-[3px] w-full cursor-pointer h-10 md:h-12 rounded-lg text-sm md:text-[16px] font-bold
                ${
                  isEmailValid
                    ? "bg-[radial-gradient(143.46%_554.36%_at_-75.93%_-93%,_#16F501_0%,_#00DA90_100%)] text-white"
                    : "bg-gray-400 cursor-not-allowed text-gray-200"
                }`}
            >
              CONTACT SPINEDGE →
            </button>
            <p onClick={handleClickPolicy} className='lg:gradient-text-green lg:w-full cursor-pointer text-[#5B6765] mono md:text-[12px] text-center md:text-left text-[10px]'>By clicking the button, I consent to the processing of my <span className='underline'>personal data</span>.</p>
                    <div className='flex justify-center items-center flex-col gap-6 lg:pb-26 pb-16 z-50  w-full pt-[65px] lg:pt-[45px]'>
                        <div className='relative w-full max-w-[730px] max-h-[400px] overflow-hidden rounded-xl'>
                            <img className='w-full h-full object-contain object-bottom ' src='/ofice.webp' />

                            <div className='ImgInfoBlock' >
                                <img src='./About/corner.png' className='AboutCorner1' />
                                <img src='./About/corner.png' className='AboutCorner2' />
                                <span className='ImgInfoTitle' >mail address:</span>
                                <span className='ImgInfoText' >152 Derech Menachem Begin Tel Aviv, Israel, 6492106. POB 138</span>
                            </div>
                        </div>

                        <div className='flex  mono md:text-[13px] text-[9px] justify-between w-full opacity-50 z-50 '>
                            <p className='gradient-text-green'>
                                © 2025, SpinEdge.
                            </p>
                            <p className='gradient-text-green'>
                                All rights reserved.
                            </p>
                            <div className='relative cursor-pointer'>

                                <p className='gradient-text-green' onClick={handleClickPolicy}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}

                                    ref={textRef}
                                    style={{ opacity: 1 }}>
                                    Privacy Policy
                                </p>
                                < span
                                    ref={underlineRef}
                                    className="absolute -bottom-1 left-0 h-[2px] bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]"
                                    style={{ width: '0%', transition: 'width 0.1s ease' }}
                                />
                            </div>
                        </div>

                    </div>
          </form>
        )}

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
        )}
      </div>
    </Fone>
  );
};

export default NineSection;
