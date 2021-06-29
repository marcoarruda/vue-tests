<template>
  <div>
    <h1 ref="title">List of users</h1>
    <p v-if="users.length == 0" ref="noUserMsg">There is no user to be shown</p>
  </div>
</template>

<script>
export default {
  name: "Users",
  data: () => ({
    users: [],
  }),
};
</script>
