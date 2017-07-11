import VueRouter from 'vue-router';

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/grid',
      name: 'grid',
      component: require('./components/grid.vue'),
    },
    {
      path: '/drag',
      name: 'drag',
      component: require('./components/DragPage.vue'),
    },
    {
      path: '/color',
      name: 'color',
      component: require('./components/ColorPage.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: require('./components/Uploadpage.vue'),
    },
    {
      path: '/input',
      name: 'input',
      component: require('./components/Inputpage.vue'),
    },
    {
      path: '/iconpage',
      name: 'iconpage',
      component: require('./components/IconPage.vue'),
    },
    {
      path: '/tooltippage',
      name: 'tooltippage',
      component: require('./components/TooltipPage.vue'),
    },
    {
      path: '/transition',
      name: 'transition',
      component: require('./components/TransitionPage.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: require('./components/MenuPage.vue'),
    },
    {
      path: '/copy',
      name: 'copy',
      component: require('./components/CopyPage.vue'),
    },
  ],
});

export default router;