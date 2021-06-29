<template>
  <div>
    <h1 ref="title">List of users</h1>
    <p v-if="users.length == 0" ref="noUserMsg">There is no user to be shown</p>

    <p ref="counter">Total of users: {{ counter }}</p>
    <div>
      <UsersListItem v-for="(user, index) in users" :key="index" :user="user" />
    </div>

    <button ref="reloadUserBtn" @click.prevent="reload">Reload</button>
    <button ref="removeUserBtn" @click.prevent="removeUser">Remove user</button>
  </div>
</template>

<script>
// components
// import UsersListItem from "@/components/UsersListItem.vue";

// axious
import axious from "../axious.js";

export default {
  name: "Users",
  components: {
    UsersListItem: () =>
      import(/* webpackChunkName: "about" */ "../components/UsersListItem.vue"),
  },
  async mounted() {
    await this.getUsers();
  },
  data: () => ({
    users: [],
  }),
  computed: {
    counter: function () {
      return this.users.length;
    },
  },
  methods: {
    async getUsers() {
      const response = await axious.get();
      this.users = response;
      console.log("done");
    },
    removeUser() {
      this.users.shift();
    },
    reload() {
      this.users = [];
      this.getUsers();
    },
  },
};
</script>
