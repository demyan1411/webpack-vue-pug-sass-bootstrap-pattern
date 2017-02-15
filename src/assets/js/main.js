import 'tether';
import 'bootstrap/dist/js/bootstrap';

import '../scss/main.scss';

import Vue from 'vue';
import App from './App';

/* eslint-disable no-new */
if (document.getElementById('app')) {
    new Vue({
        el: '#app',
        template: '<App/>',
        components: { App }
    });
}
