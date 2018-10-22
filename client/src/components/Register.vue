<template>
  <div>
    <h1>Register</h1>

// vuex coming soon
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="please enter your email address" 
    />
    <br>
     <input
      type="password"
      name="password"
      v-model="password"
      placeholder="please enter your desired password" 
    />
    <button
      @click="register"
    >Register</button>

  </div>

</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  watch: {
    email(vaule) {
      console.log("email has changed: ", value);
    }
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.email = "hello world";
    }, 2000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
