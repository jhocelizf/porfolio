import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css';

export const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const user_name = form.current['user_name'].value;
        const user_email = form.current['user_email'].value;
        const message = form.current['message'].value;

        if (!user_name || !user_email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Por favor, rellene todos los campos',
                showConfirmButton: false,
                timer: 2000,
                customClass: {
                    title: 'font-Sora font-extrabold text-ColorPrimario ',
                },
            });
            return; 
        }

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado con éxito!',
                    showConfirmButton: false,
                    timer: 2000, // Cierra automáticamente después de 2 segundos
                    customClass: {
                        title: 'font-Sora font-extrabold text-ColorPrimario ',
                    },
                });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Su mensaje no ha podido ser enviado',
                    showConfirmButton: false,
                    timer: 2000, // Cierra automáticamente después de 2 segundos
                    customClass: {
                        title: 'font-Sora font-extrabold text-ColorPrimario ',
                    },
                });
                form.current.reset();
            });
    };

    return (
        <>
            <div id='contacto' className="flex flex-col justify-center items-center">
                <div className='font-Sora flex-col flex items-center'>
                    <h2 className='text-ColorPrimario font-extrabold sm:text-[50px]'>Contactame</h2>
                    <h3>¡Trabajemos Justo!</h3>
                </div>
                <div className='w-[330px]  md:w-[600px] m-10'>
                    <form className='flex flex-col justify-center font-Sora text-[13px]' ref={form} onSubmit={sendEmail}>
                        <label>Nombre</label>
                        <input type="text" name="user_name" className=' p-2 mb-2 border-2 rounded-md border-ColorMorado focus:border-ColorMorado focus:outline-none	' />
                        <label>Email</label>
                        <input type="email" name="user_email" className='p-2 mb-2 border-2 rounded-md border-ColorMorado focus:border-ColorMorado focus:outline-none' />
                        <label>Dejame tu mensaje</label>
                        <textarea name="message" className='p-2 mb-2 border-2 rounded-md border-ColorMorado focus:border-ColorMorado focus:outline-none' />
                        <div className='flex justify-center items-center'>
                            <input type="submit" value="Enviar" className='bg-ColorPrimario text-ColorSecundario font-bold rounded-xl w-[150px] h-[50px]  my-8 text-[16px]' />
                        </div>
                    </form>
                </div>
            </div>

        </>

    );
};

export default Contacto