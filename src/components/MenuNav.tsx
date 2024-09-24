import React from "react";
import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import Home from "./icons/Home";
import Clip from "./icons/Clip";
import Panel from "./icons/Panel";
import Grid from "./icons/Grid";

const UserInfoCard: React.FC = () => {

    const [navIsOpen, setNavIsOpen] = useState(false);
    const navOpen = () => setNavIsOpen(!navIsOpen)

    return (
        <>
            <ul
                className={`${navIsOpen ? "translate-x-[0]" : "translate-x-[100vw]"} transition-transform duration-300 ease-in-out w-full absolute p-7 gap-7 grid grid-cols-2 bg-blue-neon top-16 left-0 rounded-lg z-20 lg:shadow-none lg:p-0 lg:bg-transparent lg:translate-x-[0] lg:w-auto lg:static lg:flex flex-row lg:gap-4 font-kanit font-[300]`}
            >
                <li>
                    <a className="aMenu aMenuHover" href="#home">
                        <figure>
                            {/* <Home class="svgMenu"/> */}
                            <figcaption>Inicio</figcaption>
                        </figure>
                    </a>
                </li>
                <li>
                    <a className="aMenu" href="#aboutMe">
                        <figure>
                            {/* <Clip class="svgMenu"/> */}
                            <figcaption>Sobre mí</figcaption>
                        </figure>
                    </a>
                </li>
                <li>
                    <a className="aMenu" href="#proyects">
                        <figure>
                            {/* <Grid class="svgMenu"/> */}
                            <figcaption>Proyectos</figcaption>
                        </figure>
                    </a>
                </li>
                <li>
                    <a className="aMenu" href="#skills">
                        <figure>
                            {/* <Panel class="svgMenu"/> */}
                            <figcaption>Habilidades</figcaption>
                        </figure>
                    </a>
                </li>
                <li>
                    <a className="aMenu" href="#contact">
                        <figure>
                            {/* <Panel class="svgMenu"/> */}
                            <figcaption>Contactame</figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
            <button onClick={navOpen} className="lg:hidden">
                <MenuIcon className="size-7 text-blue-neon font-bold" />
            </button>
        </>
    );
};


export default UserInfoCard;
