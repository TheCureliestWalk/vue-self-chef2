import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/assets/app.css";
import "../node_modules/toastr/build/toastr.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
