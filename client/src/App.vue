<template>
  <form>
    <label for="email">Email:</label><br />
    <input type="email" id="email" placeholder="enter email" v-model="searchEmail" @keydown="handleUserEmail">
    <div v-if="box" class="suggestion-box">
      <div v-for="item in userEmailSearched" :key="item.id" class="suggestion-item">
        {{ item.email }}
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "App",
  data() {
    return {
      searchEmail: "",
      userEmailSearched: [],
      box: false
    }
  },
  computed: {
    ...mapGetters({ emailSuggestions: "userSearch/userEmailSuggestions" })
  },
  methods: {
    ...mapActions({ searchUserEmail: "userSearch/searchUserViaEmail" }),
    handleUserEmail() {
      if (this.searchEmail.length > 0) {
        this.searchUserEmail({ email: this.searchEmail })
      }
    }
  },
  watch: {
    emailSuggestions: {
      handler(newVal) {
        if (newVal.code === 200) {
          this.userEmailSearched = newVal.users
          this.box = true
        }
        else {
          this.box = false
        }

        if (this.searchEmail === "") {
          this.userEmailSearched = []
          this.box = false
        }
      },
      deep: true
    }
  }
}
</script>

<style>
* {
  font-size: larger;
}
</style>
