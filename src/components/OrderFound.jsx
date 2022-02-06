

import React from 'react';

export const OrderFound = ( { found } ) => {


	if(!found) return <p className="text-center text-sm text-red-500">No se ha encontrado tu orden.</p>
	
	return (
						<div className="animate__animated animate__bounceInLeft text-indigo-300 rounded-lg mt-8 py-2 px-4 text-center sm:w-full md:w-1/2 mx-auto">
							<div>
								<div className="inline-block bg-yellow-500 text-white rounded-lg px-2 text-lg mb-4">Origen</div>
								<div>
									<div className="mb-4">
										<div className="inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg">Nombre: </div>
										<div className="inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg">{ found.originname }</div>
									</div>
									<div className="mb-4">
										<div className="inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg">Direccion: </div>
										<div className="inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg">{ found.originaddress }</div>
									</div>
									<div className="mb-4">
										<div className="inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg">Nombre: </div>
										<div className="inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg">{ found.origindistrit }</div>	
									</div>
								</div>
							</div>
							<div className="inline-block bg-green-600 text-white rounded-lg px-2 text-lg mb-4">Destino</div>
							<div>
								<div className="mb-4">
									<div className="inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg">Nombre: </div>
									<div className="inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg">{ found.destinationname }</div>
								</div>
								<div className="mb-4">
									<div className="inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg">Direccion: </div>
									<div className="inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg">{ found.destinationaddress }</div>
								</div>
								<div className="mb-4">
									<div className="inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg">Distrito: </div>
									<div className="inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg">{ found.destinationdistrit }</div>
								</div>
							</div>
							<div className="inline-block bg-yellow-500 text-center text-white rounded-lg px-2 text-lg">Estado: { found.status} </div>	
						</div>
				 );
};
