<template>
<v-layout row wrap align-center>
  <v-flex xs6 offset-xs3>
    <panel title='Log In'>
      <div slot="slot1">
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
              outline>
          </v-text-field>
          <br>
          <div>
            <v-alert v-bind:value="error" type="error" v-html="error" light />
          </div>
          <br>
          <v-btn class="cyan" @click="login" dark>Login</v-btn>
        </form>
      </div>
    </panel>
  </v-flex>
</v-layout>

</template>

<script>
import Panel from '@/components/Panel'
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
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .error {
  color: red;
} */
</style>
