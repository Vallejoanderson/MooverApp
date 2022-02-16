
import React from 'react';

export const CreateOrder = ( { setOrder } ) => {
	return(
					<div className="animate__animated animate__bounceInLeft">
						<h2 className="text-gray-600">
								Estamos aqui para ayudarte < br/>
						</h2>
						<button onClick={ () => setOrder( true ) } className="bg-indigo-500 hover:bg-indigo-700 rounded-full py-4 px-8 mb-8 text-white tracking-wider font-bold mt-8">
							Crear pedido   <span className="text-lg">+</span>
						</button>
					</div>
				)
};
