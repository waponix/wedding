import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import FAQView from '../views/FAQView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Eric & Faith | Wedding'
      },
      component: HomeView
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {
        title: 'Eric & Faith | Wedding Detail'
      },
      component: DetailView
    },
    {
      path: '/faq',
      name: 'faq',
      meta: {
        title: 'Eric & Faith | Wedding FAQs'
      },
      component: FAQView
    }
  ]
})

router.beforeEach(async (to, from) => {
  await nextTick(async() => {
    //@ts-ignore
    document.title = to.meta?.title || '';
  })
})

export default router
