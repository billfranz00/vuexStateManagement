import * as types from '../types';

const state = {
	counter: 0
};

const getters = {
	// doubleCounter: state => {
	[types.DOUBLE_COUNTER]: state => {
		return state.counter * 2;
	},
	// stringCounter: state => {
	[types.CLICK_COUNTER]: state => {
		return state.counter + ' Clicks';
	}
};

const mutations = {
	// increment: (state, payload) => {
	[types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
		state.counter += payload;
	},
	// decrement: (state, payload) => {
	[types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
		state.counter -= payload;
	}
};

const actions = {
	// increment: ({ commit }, payload) => {
	[types.COUNTER_INCREMENT]: ({ commit }, payload) => {
		// commit('increment', payload);
		commit(types.MUTATE_INCREMENT_COUNTER, payload);
	},
	// decrement: ({ commit }, payload) => {
	[types.COUNTER_DECREMENT]: ({commit}, payload) => {
		// commit('increment', payload.by);
		commit(types.MUTATE_DECREMENT_COUNTER, payload);
	},
	// asyncIncrement: ({ commit }, payload) => {
	[types.COUNTER_INCREMENT_ASYNC]: ({ commit }, payload) => {
		setTimeout(() => {
			// commit('increment', payload.by);
			commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
		}, payload.duration);
	},
	// asyncDecrement: ({ commit }, payload) => {
	[types.COUNTER_DECREMENT_ASYNC]: ({ commit }, payload) => {
		setTimeout(() => {
			commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
			// commit('decrement', payload.by);
		}, payload.duration);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}