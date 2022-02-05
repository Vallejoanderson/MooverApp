
import React from 'react';
import { Link } from 'react-router-dom';

export const OrderCreatedMessage = ( { setCreated } ) => {
	return <div className="animate__animated animate__bounceInLeft">
						<h2 className="text-gray-600">
								Se ha creado tu pedido< br/>
								Si necesitas crear otro pedido, adelante.
						</h2>
						<Link to='/order'>
							<button onClick = { () => { setCreated( false ); } } className="bg-indigo-500 hover:bg-indigo-700 rounded-full py-4 px-8 mb-8 text-white tracking-wider font-bold mt-8">
								Continuar
							</button>
						</Link>
					</div>
};
