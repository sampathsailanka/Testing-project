import axios from "axios";

const state = () => ({
  userEmailSuggestions: {},
  //   useridpSuggestions: {},
  //   allIdpsData: [],
});

const getters = {
  userEmailSuggestions: (state) => {
    return state.userEmailSuggestions;
  },
  //   useridpSuggestions: (state) => {
  //     return state.useridpSuggestions;
  //   },
  //   allIdpsData: (state) => {
  //     return state.allIdpsData;
  //   },
};

const actions = {
  async searchUserViaEmail({ commit }, payload) {
    axios
      .post("http://localhost:5000/user/user-email-details", payload)
      .then((response) => {
        if (response.data.code === 200) {
          console.log(response.data);
          commit("userEmailSuggestions", response.data);
        } else {
          commit("userEmailSuggestions", { code: 404, users: [] });
        }
      })
      .catch((err) => {
        commit("userEmailSuggestions", []);
        console.log(err);
      });
  },
  //   async searchUserViaIdp({ commit }, payload) {
  //     axiosinstance
  //       .post("/user-idp-details", payload)
  //       .then((response) => {
  //         if (response.data.code === 200) {
  //           commit("useridpSuggestions", response.data);
  //         } else {
  //           commit("useridpSuggestions", { code: 404, users: [] });
  //         }
  //       })
  //       .catch((err) => {
  //         commit("useridpSuggestions", []);
  //         console.log(err);
  //       });
  //   },
  //   async getAllIdp({ commit }) {
  //     axiosinstance
  //       .get("/all-idps")
  //       .then((response) => {
  //         if (response.data.code === 200) {
  //           commit("allIdpsData", response.data);
  //         } else {
  //           commit("allIdpsData", { code: 404, users: [] });
  //         }
  //       })
  //       .catch((err) => {
  //         commit("allIdpsData", []);
  //         console.log(err);
  //       });
  //   },
};

const mutations = {
  userEmailSuggestions(state, userEmailSuggestions) {
    state.userEmailSuggestions = userEmailSuggestions;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
