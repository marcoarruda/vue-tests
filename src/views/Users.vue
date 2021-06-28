<template>
  <div>
    <h1 ref="title">List of users</h1>
    <p ref="noUserMsg">There is no user regitered</p>
    <div ref="list">
      <UsersListItem v-for="(user, index) of users.slice(0, 5)" :key="index" />
    </div>
    <div ref="pagination">
      <a href="#" v-for="index in Math.floor(users.length / 5)" :key="index">
        {{ index + 1 }}
      </a>
    </div>
  </div>
</template>

<script>
// components
import UsersListItem from '@/components/UsersListItem'
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
