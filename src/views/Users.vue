<template>
  <div>
    <h1 ref="title">List of users</h1>
    <p ref="noUserMsg">There is no user regitered</p>
    <div ref="list">
      <UsersListItem v-for="(user, index) of users" :key="index" />
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
