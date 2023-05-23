import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faGripHorizontal,
  faSliders,
  faComment,
  faLocationDot,
  faShield,
  faUsers,
  faCloud,
  faBell,
  faAngleRight,
  faPuzzlePiece,
  faAngleDown,
  faWallet,
  faCircle,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGripHorizontal,
  faSliders,
  faComment,
  faLocationDot,
  faShield,
  faCloud,
  faUsers,
  faBell,
  faPuzzlePiece,
  faAngleRight,
  faAngleDown,
  faCircle,
  faWallet,
  faMagnifyingGlass
);
// library.add(faSliders);
// library.add(faComment);
// library.add(faLocationDot);
// library.add(faShield);
// library.add(faCloud);
// library.add(faUsers);
// library.add(faBell);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
