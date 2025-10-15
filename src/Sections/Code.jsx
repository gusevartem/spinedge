import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Code = ({ ref: innerRef, customStyle }) => {
    const codeRef = useRef(null);
    const animationRef = useRef(null);

    const codeText = `static bool init(CURL conn, char *url)
{
    CURLcode code;
    conn = curl_easy_init();
    if (conn == NULL) {
        fprintf(stderr, "Failed to create CURL connection\\n");
        exit(EXIT_FAILURE);
    }
    code = curl_easy_setopt(conn, CURLOPT_ERRORBUFFER, errorBuffer);
    if (code != CURLE_OK) {
        fprintf(stderr, "Failed to set error buffer [%d]\\n", code);
        return false;
    }
    code = curl_easy_setopt(conn, CURLOPT_URL, url);
    if (code != CURLE_OK) {
        fprintf(stderr, "Failed to set URL [%s]\\n", errorBuffer);
        return false;
    }
    code = curl_easy_setopt(conn, CURLOPT_FOLLOWLOCATION, 1L);
    if (code != CURLE_OK) {
        fprintf(stderr, "Failed to set redirect option [%s]\\n", errorBuffer);
        return false;
    }
    return true;
}`;

    useEffect(() => {
        // Запускаем анимацию сразу, но только на больших экранах
        if (window.innerWidth < 1024) return;

        const obj = { length: 0 };

        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.3
        });

        tl.to(obj, {
            duration: 3,
            length: codeText.length,
            onUpdate: () => {
                if (codeRef.current) {
                    codeRef.current.innerText = codeText.substring(0, Math.floor(obj.length));
                }
            },
        }).to(obj, {
            duration: 2,
            length: 0,
            delay: 0.5,
            onUpdate: () => {
                if (codeRef.current) {
                    codeRef.current.innerText = codeText.substring(0, Math.floor(obj.length));
                }
            },
        });

        animationRef.current = tl;

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, []);

    return (
        <div
            ref={innerRef}
            className={`hidden lg:block w-[234px] text-left text-[10px] absolute top-24 right-[7%] text-white h-auto max-h-[400px] select-none pointer-events-none z-0 lastLast ${customStyle}`}
            style={{
                WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                maskRepeat: 'no-repeat',
                maskSize: '100% 100%',
            }}
        >
            <pre style={{ whiteSpace: 'pre-wrap' }}>
                <code
                    className="opacity-25 font-mono"
                    ref={codeRef}
                />
            </pre>
        </div>
    );
};

export default Code;