<template>
<v-layout row wrap align-center>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field
              label="Email"
              v-model="email"
              outline
            ></v-text-field>
          <br>
          <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
              outline
            ></v-text-field>
          </form>
        <br>
        <div>
          <v-alert v-bind:value="error" type="error" v-html="error" light />
        </div>
        <br>
        <v-btn class="cyan" @click="login" dark>Login</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      // console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .error {
  color: red;
} */
</style>
