import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center text-ColorPrimario border-t-4 m-6 md:h-[100px]'>
                <div>
                    <h2 className='p-4'>©2024 All Rights Reserved.</h2>
                </div>
                <div className='flex'>
                    <div className='hover:scale-150 hover:transform hover:transition-transform '>
                        <a href="https://github.com/jhocelizf" target="_blank"><i className="bi bi-github mt-2 pt-6 pl-6 pr-6"></i></a>
                    </div>
                    <div className='hover:scale-150 hover:transform hover:transition-transform '>
                        <a href="https://www.linkedin.com/in/jhoceliz-figueroa-ab82a919a/" target="_blank"><i className="bi bi-linkedin mt-2 pt-6 pr-6 "></i></a>
                    </div>
                    <div className='hover:scale-150 hover:transform hover:transition-transform '>
                        <a href="mailto:jhocelizf@gmail.com?subject=Asunto del correo&body=Cuerpo del mensaje" target="_blank"><i className="bi bi-envelope-at-fill mt-2 pt-6 pr-6 "></i></a>
                    </div>
                    <div className='hover:scale-150 hover:transform hover:transition-transform '>
                        <a href="https://api.whatsapp.com/send/?phone=541173695695&text=Hola&type=phone_number&app_absent=0" target="_blank"><i className="bi bi-whatsapp mt-2 pt-6 pr-6 "></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

