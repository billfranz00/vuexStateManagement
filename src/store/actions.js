import * as types from './types';

// export const updateValue = ({commit}, payload) => {
// 	commit('updateValue', payload);
// }

export default {
	[types.UPDATE_VALUE]: ({commit}, payload) => {
		commit(types.MUTATE_UPDATE_VALUE, payload);
	}
}