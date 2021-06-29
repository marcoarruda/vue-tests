<template>
  <div>
    <h3>{{ user.name }}</h3>
    <p>{{ user.profession }}</p>
  </div>
</template>

<script>
export default {
  name: "UsersListItem",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
