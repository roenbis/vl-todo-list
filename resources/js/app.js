import { createApp } from 'vue';
import App from './App.vue';
import './bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusSquare, faTrash)

const app = createApp(App);

app.component('App', App, 'font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
