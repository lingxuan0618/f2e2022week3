import { createApp } from 'vue';
import popper from '@popperjs/core';
import 'bootstrap';
import './assets/scss/main.scss';
// import Typed from 'typed.js';
import App from './App.vue';
import router from './router';
import store from './store';

window.Popper = popper;

const app = createApp(App);
app.use(store);
// app.use(Typed);
app.use(router);
app.mount('#app');
