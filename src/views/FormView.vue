<template>
  <form @submit="validateForm">
    <div>
      <div>
        <h4 v-if="errors.length">please correct the following errors:</h4>
        <p v-for="item in errors" :key="item.key">
          {{ item.error }}
        </p>
      </div>
    </div>
    <FormTextInput label="name" v-model="name" />
    <FormTextInput label="phone number" v-model="phoneNumber" />
    <FormTextInput label="code" v-model="code" />
    <FormTextInput label="insurence code" v-model="insurenceCode" />
    <button>submit</button>
  </form>
</template>

<script>
import FormTextInput from "../components/FormTextInput.vue";
export default {
  name: "FormView",
  data() {
    return {
      name: "",
      phoneNumber: "",
      code: "",
      insurenceCode: "",
      errors: [],
    };
  },
  methods: {
    validateForm(e) {
      e.preventDefault();
      const isNumber = (input) => {
        return Number.isNaN(Number(input));
      };
      this.errors = [];
      if (!this.name) {
        this.errors.push({ error: "please fill in the name", key: 1 });
      }
      if (!this.phoneNumber || isNumber(this.phoneNumber)) {
        this.errors.push({
          error: "please enter a valid phone number",
          key: 2,
        });
      }
      if (this.code.length !== 5 || isNumber(this.code)) {
        this.errors.push({ error: "please enter a valide code", key: 3 });
      }
      if (!this.insurenceCode || isNumber(this.insurenceCode)) {
        this.errors.push({
          error: "please enter a valid insurence code",
          key: 4,
        });
      }
      if (!this.errors.length) {
        const userData = {
          name: this.name,
          phoneNumber: this.phoneNumber,
          code: this.code,
          insurenceCode: this.insurenceCode,
          id: Math.random(),
        };
        this.$store.dispatch("createUser", userData);
        this.$router.push("/users");
      }
    },
  },
  components: {
    FormTextInput,
  },
};
</script>
