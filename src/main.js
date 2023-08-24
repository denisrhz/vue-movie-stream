import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

/* Fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faSearch , faAngleLeft, faAngleRight, faAngleDown, faFilter} from '@fortawesome/free-solid-svg-icons'

import HomeView from './views/HomeView.vue'
import MoviesView from './views/MoviesView.vue'
import MovieView from './views/MovieView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', name: 'Home', component: HomeView},
        {path: '/movies', name: 'Movies', component: MoviesView},
        {path: '/movies/:id', name: 'Movie', component: MovieView},
    ]
})

library.add(faBars, faSearch, faAngleLeft, faAngleRight, faAngleDown, faFilter)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
