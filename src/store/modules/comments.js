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
	}
};

const mutations = {
	setComment: (state, payload) => {
		state.Comments = payload;
		// console.log(state.Comments);
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
