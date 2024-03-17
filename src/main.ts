import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import ClientForm from "@/components/ClientForm.vue";

Vue.component('client-form', ClientForm)

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')