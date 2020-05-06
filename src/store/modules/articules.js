import axios from 'axios';
const state = {
	articules: [],
	article: {}
};

const getters = {
	getArticulesState: (state) => {
		return state.articules;
	},
	getOneArticeState: (state) => {
		return state.article
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
	},

	async getOneArticule({ commit }, _id) {
		// console.log(_id)
		const response = await axios.get(`http://localhost:4000/api/routes/article/${_id}`);

		commit('getOneArtice', response.data);
	},
	async deleteOneArticule({ commit }, _id) {
		// console.log(_id)
		await axios.delete(`http://localhost:4000/api/routes/article/${_id}`);

		commit('deleteOneArtice', _id);
	}
};

const mutations = {
	setArticule: (state, payload) => {
		state.articules = payload;
	},
	addArticule: (state, payload) => (state.articules = [ payload, ...state.articules ]),
	getOneArtice: (state, payload) => {
		// console.log(state)
		// console.log(payload)
		state.article = payload
		// state.article = payload
		// console.log(state.article)
		// for (const iterator of state.article) {
		// 	// console.log(iterator);
		// 	state.article = iterator;
		// 	console.log(state.article)
		// }
	}, 
	deleteOneArtice: (state, _id) => {
		// console.log(state.articules, _id)
		state.articules.filter((articule) => {
			// console.log(articule._id, _id)
			articule._id !== _id
		})
	}

};

export default {
	state,
	getters,
	actions,
	mutations
};
