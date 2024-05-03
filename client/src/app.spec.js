// jest-environment jsdom
import { mount } from "@vue/test-utils";
import App from "./App.vue";
import { createStore } from "vuex";

describe("App.vue", () => {
  let store;

  beforeEach(() => {
    store = createStore({
      modules: {
        userSearch: {
          namespaced: true,
          actions: {
            searchUserViaEmail({ commit }, payload) {
              // Simulate response from API
              const responseData = {
                code: 200,
                users: [
                  { id: 1, email: "person1@email.com" },
                  { id: 2, email: "person2@email.com" },
                  { id: 3, email: "person3@email.com" },
                  { id: 4, email: "person4@email.com" },
                  { id: 5, email: "person5@email.com" },
                ],
              };
              commit("userSearch/userEmailSuggestions", responseData);
            },
          },
          state: {
            userEmailSuggestions: {},
          },
          mutations: {
            "userSearch/userEmailSuggestions"(state, userEmailSuggestions) {
              state.userEmailSuggestions = userEmailSuggestions;
            },
          },
        },
      },
    });
  });

  it("fetches and displays user email suggestions", async () => {
    const wrapper = mount(App, { global: { plugins: [store] } });

    // Simulate typing in the input field
    await wrapper.find("input").setValue("person");

    // Wait for Vue reactivity
    await wrapper.vm.$nextTick();

    // Check if the suggestion box is visible
    expect(wrapper.find(".suggestion-box").exists()).toBe(true);

    // Check if the correct number of suggestions is displayed
    const suggestionItems = wrapper.findAll(".suggestion-item");
    expect(suggestionItems.length).toBe(5); // Assuming 5 suggestions are returned

    // Check if the correct emails are displayed
    const expectedEmails = [
      "person1@email.com",
      "person2@email.com",
      "person3@email.com",
      "person4@email.com",
      "person5@email.com",
    ];
    suggestionItems.forEach((item, index) => {
      expect(item.text()).toContain(expectedEmails[index]);
    });
  });
});
