import Vue from 'vue';
import Vuex from 'vuex';
import Articules from './modules/articules'
import Comments from './modules/comments'
Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		Articules,
		Comments
	}
});
