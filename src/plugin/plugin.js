import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)

import axios from 'axios'

const base = axios.create({
  baseURL: 'http://localhost:8080'
});

Vue.prototype.$http = base;

import '@/assets/css/main.css'
try { window.Popper = require('popper.js').default; window.$ = window.jQuery = require('jquery'); require('bootstrap') } catch (e) { }

export default {}
