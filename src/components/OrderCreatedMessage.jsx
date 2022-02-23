
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToggle } from './hooks/useToggle';

export const OrderCreatedMessage = ( { setCreated , id } ) => {
	const [ textCopied, SetTextCopied ] = useToggle();
	useEffect( () => {
		if( textCopied ){
			setTimeout( () => {
				SetTextCopied( false );
			}, 2000 );
		}
	}, [textCopied])
	return <div className="animate__animated animate__bounceInLeft">
						<h2 className="text-gray-500">
								Pedido creado
						</h2>
						<p className="bg-gray-500 px-2 font-bold py-1 rounded-lg text-slate-100 inline cursor-pointer"
							 onClick = { () => {
								 									navigator.clipboard.writeText( id );
																	SetTextCopied();
								}}
						>
							{id}
							<i class="pl-2 las la-copy"></i>
						</p>
						{
							textCopied && 
							<span className="pl-2 animate__animated animate__fadeIn">Copiado</span>
						}
						<p className="font-bold text-gray-500 mt-2">
								Si necesitas crear otro pedido, adelante.
						</p>
						<Link to='/order'>
							<button onClick = { () => { setCreated( false ) } } className="bg-indigo-500 hover:bg-indigo-700 rounded-full py-4 px-8 mb-8 text-white tracking-wider font-bold mt-4">
								Continuar
							</button>
						</Link>
					</div>
};
