<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
          <div slot="slot1">
            <v-flex>
              <v-text-field
                label="Title"
                v-model="song.title"
              ></v-text-field>
            </v-flex>

            <v-flex >
              <v-text-field
                label="Artist"
                v-model="song.artist"
              ></v-text-field>
            </v-flex>

            <v-flex >
              <v-text-field
                label="Genre"
                v-model="song.genre"
              ></v-text-field>
            </v-flex>

            <v-flex >
              <v-text-field
                label="Album"
                v-model="song.album"
              ></v-text-field>
            </v-flex>

            <v-flex >
              <v-text-field
                label="Album Image Url"
                v-model="song.albumImageUrl"
              ></v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
                label="Youtube Link"
                v-model="song.youtubeId"
              ></v-text-field>
            </v-flex>
          </div>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <div slot="slot1">
          <v-flex >
            <v-text-field
              label="Tab"
              v-model="song.tab"
              outline
              multi-line
            ></v-text-field>
          </v-flex>

          <v-flex>
            <v-text-field
              label="Lyric"
              v-model="song.lyrics"
              multi-line
              outline
            ></v-text-field>
          </v-flex>
        </div>
      </panel>
      <v-btn class="cyan" @click="create" dark>Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      try {
        await SongService.post(this.song)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
