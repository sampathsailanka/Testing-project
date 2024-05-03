import { createStore } from "vuex";
import userSearch from "./modules/user";

export default createStore({
  modules: {
    userSearch,
  },
});
