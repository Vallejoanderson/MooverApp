
import React, { useContext, useState } from 'react';
import { OrderFound } from './OrderFound';
import { OrdersData } from './OrdersData';

export const Tracking = () => {

	const { orders } = useContext( OrdersData );
	const [ found, setFound ] = useState();
	const [ search, setSearch ] = useState();
	const [ searched, setSearched ] = useState( false );

	const find = ( e ) => {

		e.preventDefault();
		const itemFound = orders.find( obj => ( obj.ordercode == search ) );
		// console.log( itemFound );
		setFound( found => itemFound );
		setSearched( true );

	}
	
	return(
				<div className="flex flex-col items-center justify-center mt-20">
					<form onSubmit = { find } className="flex flex-col md:flex-row border-2 border-gray-200 rounded">
							<input autoComplete = "off" type="text" value = { search } onChange = { e => setSearch( e.target.value ) } name = "busqueda" className="px-4 py-2 w-80 sm:rounded-t-lg md:rounded-l-lg" placeholder="Ingresa el codigo de tu pedido"/>
							<button type="submit" className="px-4 py-2 md:py-0 text-white bg-indigo-500 hover:bg-indigo-700 border-l sm: rounded-b-lg md:rounded-r-lg">
									Buscar
							</button>
					</form>
					<div className="w-full px-20">
						{ 
							searched ? <OrderFound found = { found }/> : <div></div>
						}
					</div>
				</div>
			  )
};
