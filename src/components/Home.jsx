
import React from 'react';
import { Link } from 'react-router-dom';
import messenger from '../images/messenger.jpg'

export const Home = () => {
	return (<div>
						<div className="inline-block flex flex-col lg:flex-row items-center lg:justify-center animate__animated animate__bounceInLeft text-gray-600 px-8 py-8 lg:py-20">
							<div className="py-16">
								<h1>
											Bienvenido a Moover <br />
								</h1>
								<p className="mt-4">
											Haz que tus pedidos lleguen <br />
											a cualquier parte y mucho <br />
											más rapido con nosotros. <br />
								</p>
								<button className="bg-indigo-500 hover:bg-indigo-700 rounded-full py-4 px-8 mb-8 text-white tracking-wider font-bold mt-8">
									<Link to="/order" >
										Pedir un Moover
									</Link>
								</button>
							</div>
							<div>
								<img className="image ml-0 lg:ml-20" src={ messenger } />
							</div>
				 		</div>
						<footer className="text-white w-full  bg-indigo-500 py-10 inline-block">
							<div className="text-center lg:flex lg:justify-evenly lg:mx-96">
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
						</footer>
				 </div>
	)
};
