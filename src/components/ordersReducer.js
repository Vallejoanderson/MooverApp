import { types } from './types/types';

export const ordersReducer = ( state = [], action ) => {
	console.log(action.payload);
	switch (action.type){
		case types.add:
				return [ ...state, action.payload ];
		case types.editSt:
			return state.map( ( order ) => {
				if( order.ordercode == action.payload.ordercode ){
						return { ...order, status: action.payload.status };
					}else{
						return order;
					}
				})
		default:
			return state;
	}
}