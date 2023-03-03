import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/assets/app.css";
import "../node_modules/toastr/build/toastr.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// Algolia
import InstantSearch from 'vue-instantsearch/vue3/es';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(InstantSearch);
app.use(vuetify).mount("#app");
