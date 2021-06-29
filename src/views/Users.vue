<template>
  <div>
    <h1 ref="title">List of users</h1>
    <p v-if="users.length == 0" ref="noUserMsg">There is no user to be shown</p>

    <div>
      <UsersListItem v-for="(user, index) in users" :key="index" />
    </div>
  </div>
</template>

<script>
// components
import UsersListItem from "@/components/UsersListItem.vue";

export default {
  name: "Users",
  components: {
    UsersListItem,
  },
  data: () => ({
    users: [],
  }),
};
</script>
