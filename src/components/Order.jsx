import React, { useContext, useEffect, useState } from 'react';
import { CreateOrder } from './CreateOrder';
import { Form } from './Form';
import { OrderCreatedMessage } from './OrderCreatedMessage';
import { OrdersData } from './OrdersData';
import '../index.css'

export const Order = () => {

	const [ order, setOrder ] = useState( false );
	const [ created, setCreated ] = useState( false );
	const { orders, formValues, reset, lastOrder } = useContext( OrdersData );

	useEffect(() => {

		localStorage.setItem( 'orders', JSON.stringify( orders ) );
		reset();

	}, [ orders ] );
	
	return( <div className="w-full max-w-lg px-8 mx-auto mt-8">
						<div>
							{
								!order && !created ? <CreateOrder setOrder = { setOrder }/>  :
								 order && !created ? <Form setCreated = { setCreated }			 
																				 setOrder	  = { setOrder } />				 :
																			<OrderCreatedMessage setCreated = { setCreated }
																													 id = { lastOrder }
																			/>
							}
						</div>
					</div>
		)
};
