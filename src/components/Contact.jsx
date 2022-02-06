
import map from '../images/map.jpg'


import React from 'react';

export const Contact = () => {
	return( 
					<div className="inline-block flex flex-col md:flex-row lg:justify-center animate__animated animate__bounceInLeft text-gray-600 px-8 py-8 lg:py-20">
						<div className="py-16">
						<div className="text-center mr-16">
								<div className="text-3xl">
									Contactanos
								</div>
								<div>
									<i className="fas fa-phone fa-2x mb-2"></i>
									<div>Whatsapp/Llamada</div>
									<div>+51 999 999 999</div>
								</div>
								<div>
									<i className="far fa-envelope fa-2x"></i>
									<div>Atencion comercial</div>
									<div>atencion@comercial.com</div>
								</div>
								<div>
									<i className="far fa-clock fa-2x"></i>
									<div>Horario</div>
									<div>L-S - 8:00 - 20:00</div>
								</div>
							</div>
						</div>
						<div className="w-96 mx-auto md:mx-0">
							<img className="image" src={ map } />
						</div>
				</div>
				)
}
