<template>
<v-layout row wrap align-center>
  <v-flex xs6 offset-xs3>
    <my-panel title="Songs">
      <div v-for="song in songs" :key="song.id" slot="slot1">
        {{song.title}}
        {{song.artist}}
        {{song.album}}
      </div>
    </my-panel>
  </v-flex>
</v-layout>
</template>

<script>
import MyPanel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    MyPanel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data // Don't forget to put .data when you send "get" requests. This is how axios returns the data.
    console.log(this.songs)
  }
}
</script>

<style scoped>
</style>
