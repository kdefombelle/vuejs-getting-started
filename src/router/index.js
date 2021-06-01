import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/HomePage.vue';
import FirstComponent from '../components/FirstComponent.vue';
import SecondComponent from '../components/SecondComponent.vue';
import ThirdComponent from '../components/ThirdComponent.vue';

Vue.use(Router);

export default new Router(
  {
    routes: [
      {
        path: '/',
        name: 'Home',
        component: HomePage,
      },
      {
        path: '/first',
        name: 'First',
        component: FirstComponent,
      },
      {
        path: '/second/:id',
        name: 'Second',
        component: SecondComponent,
      },
			{
        path: '/third',
        name: 'Third',
        component: ThirdComponent,
        props: true,
      }
    ],
  }
);
