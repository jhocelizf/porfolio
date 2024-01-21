import React from 'react'
import { FaGithub, FaExternalLinkAlt,  } from 'react-icons/fa';
import { PiPaperclipHorizontalBold } from "react-icons/pi";

const Tarjetas = ({ title, text, git, deploy, customIcon}) => {
    return (
        <>
            <div className='bg-ColorPrimario text-ColorSecundario mb-[25px] rounded-xl flex-none flex w-[250px] md:w-[340px]'>
                <div className='font-Sora p-7 pb-[10px] md:w-[370px] md:h-[290px]'>
                    <div className='flex justify-end pb-2'>
                    {git && <a className="pr-2" href={git} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                    {deploy && <a href={deploy} target="_blank" rel="noopener noreferrer"><PiPaperclipHorizontalBold /></a>}
                    </div>
                    <h2 className='font-bold pb-2 mb-[18px] hover:text-SoftOrange cursor-pointer text-[13px] sm:text-[14px]'>{title}</h2>
                    <p className='text-GrayishBlue text-[12px] sm:text-[13px]'>{text}</p>
                    {customIcon && (
                        <div className='flex mt-2 pt-6 pr-6 gap-3 text-2xl'>
                            {customIcon}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Tarjetas