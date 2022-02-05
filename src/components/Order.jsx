import React, { useState } from 'react';
import '../index.css'
import { CreateOrder } from './CreateOrder';
import { Form } from './Form';
import { OrderCreatedMessage } from './OrderCreatedMessage';

export const Order = () => {

	const [ order, setOrder ] = useState( false );
	const [ created, setCreated ] = useState( false );
	
	return( <div className="w-full max-w-lg px-8 mx-auto mt-8">
						<div>
							{
								!order && !created ? <CreateOrder setOrder = { setOrder }/>  :
								 order && !created ? <Form setCreated = { setCreated }			 
																				 setOrder	  = { setOrder } />				 :
																			<OrderCreatedMessage setCreated = { setCreated } />
							}
						</div>
					</div>
		)
};
