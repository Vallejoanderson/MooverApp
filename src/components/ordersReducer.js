import { types } from '../types/types';

export const ordersReducer = ( state = [], action ) => {
	switch (action.type){
		case types.add:
				return [ ...state, action.payload ];
		default:
			return state;
	}
}