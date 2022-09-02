<template>
  <div>
    <div>
      <UserData v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserData from "../components/UserData.vue";
export default {
  name: "UsersView",
  computed: {
    ...mapGetters({
      users: "getUsers",
    }),
  },
  components: { UserData },
};
</script>
