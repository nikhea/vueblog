import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../components/Landing.vue';
import Articules from '../components/articules/articlules.vue';
import AddArticules from '../components/articules/form/AddArticules.vue';
import  SingleArticle from '../components/articules/singleArticle.vue';
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
	},
	{
		path: '/newArticles',
		name: 'AddArticules',
		component: AddArticules
	},
	{
		path: '/articles/:id',
		name: 'SingleArticle',
		component: SingleArticle
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;
