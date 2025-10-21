import React from "react";

function Footer() {
    return (
    <div className='row mt-5 bg-primary'>

        <div className='col-md-4 text-center p-2 text-light'>
            <img src='/assets/images/logo-sin-fondo.png' alt='Logo de la tienda' className='mb-3' style={{ maxHeight: '100px' }} />
            <div className='d-flex gap-3 justify-content-center'>
                <a href='#'><img src='/assets/images/icon/1.png' alt='Facebook' style={{ maxHeight: '24px' }} /></a>
                <a href='#'><img src='/assets/images/icon/2.png' alt='Instagram' style={{ maxHeight: '24px' }} /></a>
                <a href='#'><img src='/assets/images/icon/3.png' alt='X' style={{ maxHeight: '24px' }} /></a>
            </div>  
        </div>

        <div className='col-md-4 text-center p-2 text-light'>
            <h5 className='fw-bold mb-2 text-info'>Contacto</h5>
            <p className='mb-1'>📍 Av. Providencia 10225, Santiago</p>
            <p className='mb-1'>📞 +56 9 1234 5678</p>
            <p className='mb-3'>✉️ contacto@levelup.com</p>
        </div>

        <div className='col-md-4 text-center p-2 text-light'>
            <h5 className='fw-bold mb-2 text-info'>Horario de Atención</h5>
            <p className='mb-3'>Lunes a Viernes: 9:00 - 18:00<br/>Sábados: 10:00 - 14:00</p>
            <h6 className='fw-bold mb-2'>Canales</h6>
            <p className='mb-0'>WhatsApp, correo y redes sociales.</p>
        </div>

        <hr className='border-secondary my-4' />
        <p className='text-center small mb-0 text-light'>&copy; 2025 Level-Up Gamer. Todos los derechos reservados.</p>

    </div>
    );
}

export default Footer;