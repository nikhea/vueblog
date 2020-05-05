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
	},
	async addArticule({ commit }, { title, author, description, image }) {
		let newArticules = { title, author, description, image };
		const response = await axios.post(`http://localhost:4000/api/routes/article`, newArticules);

		commit('addArticule', response.data);
	}
};

const mutations = {
	setArticule: (state, payload) => {
		state.articules = payload;
	},
	addArticule: (state, payload) => (state.articules = [ payload, ...state.articules ])
};

export default {
	state,
	getters,
	actions,
	mutations
};
