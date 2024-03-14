import React from "react";
import { useState } from "react";
import ArrowNext from "./icons/ArrowNext.astro";

const UserInfoCard: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)

    const openInfo = () => setIsOpen(!isOpen)

    return (
        <div className="w-fit h-fit rounded-3xl shadow-[0_5px_0] border-2 overflow-hidden relative bg-blue-neon shadow-blue-neon border-blue-neon">
            <div className={`${isOpen ? "-translate-y-[0]" : "-translate-y-[100%]"} w-full h-fit px-8 py-4 flex flex-col items-center justify-end transition-transform duration-300 ease-in-out absolute top-0 left-0 bg-blue-neon`} >
                <ul className="w-full text-white flex flex-col gap-3">
                    <li>
                        <p>
                            <b>Nombre:</b><br />Samuel Sarmiento Rivas
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Origen:</b><br />Bogotá, Colombia
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Profesión:</b>
                            <br />Programador de software, Músico
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Correo:</b><br />rivassamuel.ssr&#64;gmail.com
                        </p>
                    </li>
                </ul>
                <button onClick={openInfo} className={`${isOpen ? "translate-y-[100%]" : "-translate-y-[50%]"} size-14 rounded-b-full grid place-content-center translate-y-[calc(50%_+_1rem)] transition-[translate_.3s,padding_.3s] hover:translate-y-[calc(60%_+_1rem)] hover:pb-1 bg-blue-neon`}>
                    <svg
                        className={`${isOpen ? "-rotate-90" : "rotate-90"} size-7 rotate-90 translate-y-[40%] transition-[translate_.3s] text-alice-blue`}
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                            fill="currentColor">
                        </path>
                    </svg>
                </button>
            </div>
            <img src="photo.avif" alt="Foto de Samuel Sarmiento" />
        </div>
    );
};


export default UserInfoCard;
