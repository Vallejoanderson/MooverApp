import { types } from './types/types';

export const ordersReducer = ( state = [], action ) => {
	console.log('I exist');
	switch (action.type){
		case types.add:
				return [ ...state, action.payload ];
		default:
			return state;
	}
}