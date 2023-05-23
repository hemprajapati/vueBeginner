import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faTrash,
  faFilter,
  faAdd,
  faSearch,
  faArrowUpShortWide,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret);
library.add(faTrash);
library.add(faFilter);
library.add(faAdd);
library.add(faSearch);
library.add(faArrowUpShortWide);
library.add(faArrowDownShortWide);


const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
