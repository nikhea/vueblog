import axios from 'axios';
const state = {
	Comments: []
};

const getters = {
	getStateComments: (state) => {
		return state.Comments;
	}
};

const actions = {
	async getComments({ commit }, _id) {
		console.log(_id);
		const response = await axios.get(`http://localhost:4000/api/routes/article/${_id}/comment`);

		commit('setComment', response.data);
	},
	async addComment({ commit }, { author, content }, _id) {
		let body = { author, content }
		// const response = await axios.post(`http://localhost:4000/api/routes/article/${_id}/comment`, body);
		commit('addcomment')
		console.log(_id, body)
	}
};

const mutations = {
	setComment: (state, payload) => {
		state.Comments = payload;
		// console.log(state.Comments);
	},
	addcomment: (state, payload) => {
		console.log(state, payload)
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
