import React from "react";
import { useState } from "react";

interface Props {
    children: React.ReactNode;
}

const UserInfoCard: React.FC<Props> = ({ children }) => {

    const [navIsOpen, setNavIsOpen] = useState(false);
    const navOpen = () => setNavIsOpen(!navIsOpen)

    return (
        <>
            <ul
                className={`${navIsOpen ? "translate-x-[0]" : "translate-x-[100vw]"} transition-transform duration-300 ease-in-out shadow-[0_0_15px_3px_rgba(0,0,0,0.5)] w-full absolute p-7 gap-7 grid grid-cols-2 bg-blue-neon top-16 left-0 rounded-lg z-20 lg:relative lg:flex flex-row lg:gap-4 font-kanit font-[300]`}
            >
                {children}
            </ul>
            <button onClick={navOpen}>
                <svg
                    className="size-7 text-blue-neon font-bold"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    transform="rotate(0)"
                    stroke="currentColor"
                    stroke-width="1.2"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                        fill="currentColor">
                    </path>
                </svg>
                {/* <MenuIcon class="size-7 text-blue-neon font-bold" /> */}
            </button>
        </>
    );
};


export default UserInfoCard;
