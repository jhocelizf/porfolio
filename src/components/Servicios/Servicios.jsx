import React from 'react'

const Proyectos = () => {
  return (
    <>
      <div id='servicios' className='h-full font-Sora md:h-[600px]'>
        <h1 className='text-ColorPrimario font-extrabold text-[40px] my-16 text-center md:text-[50px]'>Servicios</h1>
        <div className='m-8 sm:flex sm:justify-center md:gap-16'>
          <div className='bg-ColorGreen text-ColorPrimario rounded-2xl mb-10 p-12 md:w-[440px] md:h-[360px]'>
            <i className="bi bi-laptop text-7xl	"></i>
            <h2 className='text-[25px] pb-5 md:[35px]'>Diseño Web</h2>
            <p className='text-[12px] md:text-[14px]'>Apartir de un maquetado web diseño siguiendo los principios de experiencia
              de usuario y diseño de interfaz, para poder reflejar tu marca y tu mensaje de manera efectiva. </p>
          </div>
          <div className='bg-ColorPrimario text-ColorSecundario rounded-2xl mb-10 p-12 sm:w-[440px] sm:h-[360px]'>
            <i className="bi bi-braces text-7xl	"></i>
            <h2 className='text-[25px] pb-5 md:[35px]'>Desarollo Web</h2>
            <p className='text-[12px] md:text-[14px]'>Puedo desarrollar sitios web de manera optimizada y adaptativa a todos los dispositivos (desktop, tablet, mobile).
              para maximizar tu presencia en línea. </p>
          </div>
          <div className='bg-ColorMorado text-ColorSecundario rounded-2xl mb-10  p-12 sm:w-[440px] sm:h-[360px]'>
            <i className="bi bi-clipboard-data text-7xl	"></i>
            <h2 className='text-[25px] pb-5 md:[35px]'>Ciencia de Datos e Inteligencia Artificial</h2>
            <p className='text-[11px] md:text-[13px]'>Manejo analisis de datos, que permite identificar los algoritmos y tecnicas apropiadas
              para la solucion de problemas concretos conociendo las limitaciones de las tecnicas estadisticos que permite desarrollar un programa prototipo.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Proyectos