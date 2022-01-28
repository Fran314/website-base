import { createRouter, createWebHistory } from 'vue-router';

let routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/pages/Home.vue'),
	},
	{
		path: '/some1',
		name: 'tools-some1',
		component: () => import('@/pages/some1/Some1.vue'),
	},
	{
		path: '/some2',
		name: 'tools-some2',
		component: () => import('@/pages/some2/Some2.vue'),
	},
	{
		path: '/some3',
		name: 'games-some3',
		component: () => import('@/pages/some3/Some3.vue'),
	},
	{
		path: '/some4',
		name: 'games-some4',
		component: () => import('@/pages/some4/Some4.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;