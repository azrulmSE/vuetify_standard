<template>
  <div id='App'>
    <v-layout row>
    <v-flex >
      <v-card>
        <v-toolbar color="teal" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Manage</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <router-view></router-view>
      </v-card>
    </v-flex>
  </v-layout>
  </div>  
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            action: 'move_to_inbox',
            title: 'Inbox'
          }
        ]
      }
    }
  }
</script>