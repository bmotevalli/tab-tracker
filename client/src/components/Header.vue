<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title>
            <v-btn flat dark to="Home">TabTracker</v-btn>
        </v-toolbar-title>
        <v-toolbar-items >
        <v-btn flat to="songs" >Browse</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down"  >
        <v-btn flat to="login" v-if="!$store.state.isUserLoggedIn">Log In</v-btn>
        <v-btn flat dark to="register" v-if="!$store.state.isUserLoggedIn">Sign Up</v-btn>
        <v-btn flat dark @click="logout" to="Home" v-if="$store.state.isUserLoggedIn">Log Out</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
