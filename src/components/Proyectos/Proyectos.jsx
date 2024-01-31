import React from 'react'
import Tarjetas from '../Tarjetas/Tarjetas.jsx'
import { FaBootstrap , FaReact , FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";

const Proyectos = () => {
    return (
        <>
            <div id='proyectos' className="rounded-2xl bg-ColorSecundario h-full m-8">
                <div>
                    <h1 className='text-ColorPrimario font-extrabold text-[40px] my-10 text-center md:text-[50px]'>Proyectos</h1>
                </div>

                <div className='flex flex-wrap place-content-between gap-10 justify-center'>
                    <Tarjetas
                        git='https://github.com/jhocelizf/guarderia-el-country'
                        deploy='https://guarderia-el-country.vercel.app/'
                        title='El Country - Guarderia canina'
                        text='Landing page, se desarrollo interfaz de usuario, la pagina esta diseñada para verse en varios dispositivos. Esta página refleja los diseños
                        anteriores y gustos de los clientes.'
                        customIcon={
                            <>
                            <IoLogoJavascript />
                            <FaReact /> 
                            <FaBootstrap />
                            </>
                        
                    }
                    />
                    <Tarjetas
                        git='https://github.com/jhocelizf/proyecto-js'
                        deploy='https://jhocelizf.github.io/proyecto-js/'
                        title='Ama de casa - Ecommerce'
                        text='Pagina web interativa en JavaScript, simulando un ecommerce donde se pueden mostrar los productos,
                        agregarlos al carrito y simular el pago.'
                        customIcon={
                            <>
                            <FaHtml5 />
                            <IoLogoCss3 />
                            <IoLogoJavascript />
                            <FaBootstrap />
                            </>
                        
                    }
                        
                    />
                    <Tarjetas
                        git='https://github.com/jhocelizf/Traductor..git'
                        deploy='https://traductoor.vercel.app/'
                        title='Traductor'
                        text='Traductor es una app diseñada para brindarte una experiencia de
                        traducción rápida. Desarrollada con React, utiliza solicitudes GET para 
                        obtener información sobre los idiomas disponibles y POST para enviar tus solicitudes de
                        traducción a la API.'
                        customIcon={
                            <>
                            <FaReact /> 
                            <IoLogoCss3 />
                            <IoLogoJavascript />
                            </>
                    }
                    />
                </div>
            </div>
        </>
    )
}

export default Proyectos