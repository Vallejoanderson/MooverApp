
import React, { useContext } from 'react';
import { OrdersData } from './OrdersData';
import { types } from './types/types';

export const Form = ( { setCreated, setOrder } ) => {

	const { formValues, handleInputChange, reset, setLastOrder } = useContext( OrdersData )

	const { originname, originaddress, origindistrit, 
					originphone, destinationname, destinationaddress, 
					destinationdistrit, destinationphone  } = formValues;

	const { dispatch } = useContext( OrdersData );

	const handleSubmit = ( e ) => {

		e.preventDefault();
		setLastOrder( formValues.ordercode );
		dispatch( {
			type: types.add,
			payload: formValues,
		})
		setCreated( true );
		setOrder( false );
	}

	return 	(
				<>
						<form onSubmit={ handleSubmit } className="animate__animated animate__bounceInLeft">
							<h2 className="text-gray-600">Tu Moover ya se está alistando</h2>
							<p className="text-center mb-8">Datos de origen</p>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Nombre
									</label>
									<input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
												type="text"
												name = "originname"
												placeholder="Persona que envia"
												autoComplete = "off"
												value = { originname }
												onChange = { handleInputChange }
												required
									/>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Dirección
									</label>
									<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												type="text"
												placeholder="Dirección de origen"
												name = "originaddress"
												autoComplete = "off"
												value = { originaddress }
												onChange = { handleInputChange }
												required
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-2">
								<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Distrito
									</label>
									<div className="relative">
										<select name = "origindistrit"
														className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
														value = { origindistrit }
														onChange = { handleInputChange }
														required
										>
											<option value = ''> --- Elige un distrito ---  </option>
											<option value = 'Callao'>Callao</option>
											<option value = 'Bellavista'>Bellavista</option>
											<option value = 'Ate'>Ate</option>
											<option value = 'Barranco'>Barranco</option>
											<option value = 'Breña'>Breña</option>
											<option value = 'Chorrillos'>Chorrillos</option>
											<option value = 'Jesus Maria'>Jesus Maria</option>
											<option value = 'La Victoria'>La Victoria</option>
											<option value = 'Magdalena del Mar'>Magdalena del Mar</option>
											<option value = 'Miraflores'>Miraflores</option>
											<option value = 'Pueblo Libre'>Pueblo Libre</option>
											<option value = 'San Isidro'>San Isidro</option>
											<option value = 'San Luis'>San Luis</option>
											<option value = 'San Miguel'>San Miguel</option>
											<option value = 'Santiago de Surco'>Santiago de Surco</option>
											<option value = 'Surquillo'>Surquillo</option>
										</select>
									</div>
								</div>
								<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Teléfono
									</label>
									<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												type="text"
												name = 'originphone'
												placeholder="999 999 999"
												autoComplete = "off"
												value = { originphone }
												onChange = { handleInputChange }
												required
									/>
								</div>
							</div>
							<p className="text-center my-8">Datos de destino</p>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Nombre
									</label>
									<input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
												type="text"
												name = "destinationname"
												placeholder="Persona que envia"
												autoComplete = "off"
												value = { destinationname }
												onChange = { handleInputChange }
												required
									/>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Dirección
									</label>
									<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												type="text"
												name = "destinationaddress"
												placeholder="Dirección de origen"
												autoComplete = "off"
												value = { destinationaddress }
												onChange = { handleInputChange }
												required
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-2">
								<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Distrito
									</label>
									<div className="relative">
										<select name = "destinationdistrit"
														className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
														value = { destinationdistrit }
														onChange = { handleInputChange }
														required
										>
											<option value = ''> --- Elige un distrito ---  </option>
											<option value = 'Callao'>Callao</option>
											<option value = 'Bellavista'>Bellavista</option>
											<option value = 'Ate'>Ate</option>
											<option value = 'Barranco'>Barranco</option>
											<option value = 'Breña'>Breña</option>
											<option value = 'Chorrillos'>Chorrillos</option>
											<option value = 'Jesus Maria'>Jesus Maria</option>
											<option value = 'La Victoria'>La Victoria</option>
											<option value = 'Magdalena del Mar'>Magdalena del Mar</option>
											<option value = 'Miraflores'>Miraflores</option>
											<option value = 'Pueblo Libre'>Pueblo Libre</option>
											<option value = 'San Isidro'>San Isidro</option>
											<option value = 'San Luis'>San Luis</option>
											<option value = 'San Miguel'>San Miguel</option>
											<option value = 'Santiago de Surco'>Santiago de Surco</option>
											<option value = 'Surquillo'>Surquillo</option>
										</select>
									</div>
								</div>
								<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Teléfono
									</label>
									<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												type="text"
												name = 'destinationphone'
												placeholder="999 999 999"
												autoComplete = "off"
												value = { destinationphone }
												onChange = { handleInputChange }
												required
									/>
								</div>
							</div>
							<button type="submit" className="bg-indigo-500 hover:bg-indigo-700 rounded-full py-4 px-8 mb-8 text-white tracking-wider font-bold mt-4">Finalizar pedido</button>
						</form>
				</>
	)};