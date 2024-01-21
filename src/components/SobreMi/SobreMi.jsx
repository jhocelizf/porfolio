import React from 'react'
import imgSobreMi from "../../assets/imgSobreMi.jpg"
import fotocv from "../../assets/foto_cv.jpeg"
import cv from "../../../public/cv.pdf"

const SobreMi = () => {
    return (
        <>
            <div id='sobremi' className='bg-ColorPrimario text-ColorSecundario flex flex-col mt-16 md:flex-row md:h-[745px]'>
                <div className='m-[25px] md:m-[80px]  sm:flex md:justify-center'>
                    <img className='rounded-2xl md:flex items-center md:justify-center' src={fotocv} alt="" />
                </div>
                <div className='m-[25px] font-Sora sm:my-[80px] sm:text-[20px] sm:flex sm:justify-center sm:flex-col sm:w-[700px]'>
                    <h2 className='sm:text-[20px]'>Soy Desarrolladora de Software con conocimientos en Desarrollo Full stack, Ciencias de Datos e Inteligencia Artificial. Represento una solución eficaz para tus necesidades en estos ambitos. Mi objetivo es crear soluciones funcionales,
                        eficientes y sencillas.</h2>
                    <button className='bg-ColorSecundario text-ColorPrimario font-extrabold rounded-xl w-[150px] h-[50px]  my-8 text-[16px]'>
                        <a href={cv} target="_blank" rel="noopener noreferrer" download>Mi CV</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SobreMi