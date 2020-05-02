import axios from 'axios';
const state = {
	articules: []
};

const getters = {
	getArticulesState: (state) => {
		return state.articules;
	}
};

const actions = {
	async getArticule({ commit }) {
		const response = await axios.get(`http://localhost:4000/api/routes/article`);

		commit('setArticule', response.data);
	}
};

const mutations = {
	setArticule: (state, payload) => {
		state.articules = payload;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
