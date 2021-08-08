import Vue from 'vue'
import Toast from 'vue-toastification'

import 'vue-toastification/dist/index.css'

const options = {
	position: 'top-right',
	timeout: 3000,
	closeOnClick: true,
	pauseOnFocusLoss: true,
	pauseOnHover: true,
	draggable: false,
	hideProgressBar: false,
	closeButton: false,
	icon: true,
	transition: 'Vue-Toastification__slideBlurred'
}

Vue.use(Toast, options)
