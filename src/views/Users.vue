<template>
  <div>
    <h1 ref="title">List of users</h1>
    <p v-if="users.length == 0" ref="noUserMsg">There is no user to be shown</p>

    <p ref="counter">Total of users: {{ counter }}</p>
    <div>
      <UsersListItem v-for="(user, index) in users" :key="index" :user="user" />
    </div>

    <button ref="removeUserBtn" @click.prevent="removeUser">Remove user</button>
  </div>
</template>

<script>
// components
// import UsersListItem from "@/components/UsersListItem.vue";

export default {
  name: "Users",
  components: {
    UsersListItem: () =>
      import(/* webpackChunkName: "about" */ "../components/UsersListItem.vue"),
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
    removeUser() {
      this.users.shift();
    },
  },
};
</script>
