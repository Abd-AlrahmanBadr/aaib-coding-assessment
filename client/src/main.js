import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Plugins
import vuetify from './plugins/vuetify'
import '@/plugins/toaster'

Vue.config.productionTip = false

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app')
