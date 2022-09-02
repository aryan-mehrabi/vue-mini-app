<template>
  <div>
    <div
      @click="isAccordinOpen = !isAccordinOpen"
      class="user-data cursor-pointer hoverable"
      :class="{ active: isAccordinOpen }"
    >
      <h5>{{ user.name }}</h5>
      <p>{{ user.phoneNumber }}</p>
      <p>{{ user.insurenceCode }}</p>
    </div>
    <div v-if="isAccordinOpen">
      <div class="user-data">
        <FormTextInput v-model="name" :initValue="name" label="Name" />
        <FormTextInput
          v-model="phoneNumber"
          :initValue="phoneNumber"
          label="Phone number"
        />
        <FormTextInput
          v-model="insurenceCode"
          :initValue="insurenceCode"
          label="Insurence code"
        />
      </div>
      <div class="button-contianer">
        <button class="button" @click="updateUser">Edit</button>
        <button class="button" @click="deleteUser">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import FormTextInput from "./FormTextInput.vue";
export default {
  name: "UserData",
  props: {
    user: Object,
  },
  data() {
    return {
      isAccordinOpen: false,
      name: this.user.name,
      phoneNumber: this.user.phoneNumber,
      insurenceCode: this.user.insurenceCode,
    };
  },
  methods: {
    updateUser() {
      this.$store.dispatch("updateUser", {
        name: this.name,
        phoneNumber: this.phoneNumber,
        insurenceCode: this.insurenceCode,
        id: this.$props.user.id,
      });
    },
    deleteUser() {
      this.$store.dispatch("deleteUser", this.$props.user.id);
    },
  },
  components: { FormTextInput },
};
</script>

<style lang="scss">
.active {
  background-color: aliceblue;
}
.cursor-pointer {
  cursor: pointer;
}
.hoverable {
  &:hover {
    background-color: aliceblue;
  }
}
.user-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding: 10px;
}
.button-contianer {
  display: flex;
  justify-content: end;
  .button {
    margin: 0 5px;
    &:last-child {
      background-color: red;
      color: white;
    }
  }
}
button {
  padding: 5px 15px;
  border: none;
  border-radius: 3px;
}
</style>
