import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../components/Landing.vue';
import Articules from '../components/articules/articlules.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Landing',
		component: Landing
	},
	{
		path: '/articules',
		name: 'Articules',
		component: Articules
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;
