import { AArrowDown, AArrowUp, Menu, Play, Search, User } from 'lucide-react';
import Image from 'next/image'; // Certifique-se de que está usando o caminho correto para o componente Image

export function Header() {
    return (
        <header className="header-container">
            <div className="flex items-center justify-between">
                <div className="flex gap-8 items-center">
                    <Image
                        src="/sky-light-default.svg"
                        alt="Sky Light Default"
                        className="SKYLightDefault"
                        width={88}
                        height={33}
                    />

                    <div className='md:hidden flex absolute right-4 icons'>
                        <Menu />
                    </div>


                    <div className="gap-4 xs:hidden md:flex">

                        <div className="header-circle-icon">
                            <User size={14} className="icons" />
                        </div>

                        <div className="header-circle-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="icons bi bi-circle-half" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
                            </svg>
                        </div>

                        <div className="header-circle-icon">
                            <AArrowUp size={14} className="icons" />
                        </div>

                        <div className="header-circle-icon">
                            <AArrowDown size={14} className="icons" />
                        </div>


                    </div>

                </div>

                <div className="flex ml-[114px] items-center xs:hidden md:flex">

                    <div className="flex items-center gap-2 cursor-pointer">
                        <Play size={16} className="icons" />
                        <small className="header-title">Play</small>
                    </div>

                </div>






                <div className="flex gap-2 items-center xs:hidden md:flex">
                    <User size={14} className="icons" />
                    <small className="header-title cursor-pointer">Entrar</small>

                    <div className="flex ml-5 items-center">
                        <Search size={14} className="icons" />

                    </div>

                </div>




            </div>
        </header>
    );
}
