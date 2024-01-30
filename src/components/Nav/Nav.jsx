import React from 'react'
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {

    const [menuClick, setMenuClick] = useState(true)

    const handleClick = () => {
        setMenuClick(prevState => !prevState)
    }

    return (
        <>
            <div className='header h-[80px] flex place-content-between items-center rounded-md bg-ColorSecundario m-8 mb-8'>
                <h1 className='uppercase font-Sora font-extrabold pl-4 text-ColorPrimario text-[40px] '>J.</h1>
                <ul className={`${menuClick ? 'hidden' : ''} absolute bg-ColorSecundario text-ColorPrimario top-0 right-0 w-[256px] p-[24px]
                h-full text-[18px] font-Sora sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto
                sm:relative sm:text-[16px]`}>
                    <li className={`${menuClick ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
                        <i className="bi bi-x-lg w-8 h-8 mb-[87px]" onClick={handleClick}></i>
                    </li>

                    <li className='hover:font-extrabold'>
                        <ScrollLink to="inicio" smooth={true}>Inicio</ScrollLink>
                    </li>
                    <li className='hover:font-extrabold'>
                        <ScrollLink to="sobremi" smooth={true}>Sobre mi</ScrollLink>
                    </li>
                    <li className='hover:font-extrabold'>
                        <ScrollLink to="servicios" smooth={true}>Servicios</ScrollLink>
                    </li>
                    <li className='hover:font-extrabold'>
                        <ScrollLink to="proyectos" smooth={true}>Proyectos</ScrollLink>
                    </li>
                    <li className='hover:font-extrabold'>
                        <ScrollLink to="contacto" smooth={true}>Contacto</ScrollLink>
                    </li>
                </ul>
                {/* <i className="{`${menuClicked ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden" onClick={handleClick} ></i> */}
                <i className="bi bi-list {`${menuClicked ? '' : 'hidden'} w-10 h-5 
            
            cursor-pointer sm:hidden" onClick={handleClick}></i>

            </div>

        </>
    )
}

export default Nav