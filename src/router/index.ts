import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientForm from "@/components/ClientForm.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ClientForm
    },
  ]
})

export default router
