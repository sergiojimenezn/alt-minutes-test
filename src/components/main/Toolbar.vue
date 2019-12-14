<template>
  <v-row no-gutters>
    <div class="headline grey--text text--darken-4">Invite</div>
    <v-spacer></v-spacer>
    <div>
      <v-btn color="grey lighten-2" depressed fab height="48" width="48" class="mx-5">
        <v-icon>{{ icons.search }}</v-icon>
      </v-btn>
      <v-menu
        bottom
        offset-y
        class="hidden-sm-and-down"
      >
        <template v-slot:activator="{ on }">
          <v-btn text depressed icon height="48" width="48" :ripple="false" v-on="on">
            <v-avatar>
              <v-img src="/assets/images/avatar.svg" alt="avatar"/>
            </v-avatar>
          </v-btn>
        </template>
        <v-list class="white grey--text text--darken-1">
          <v-list-item>My profile</v-list-item>
          <v-list-item>Logout</v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-row>
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
  data: () => {
    return {
      icons: {
        search: mdiMagnify
      }
    }
  }
}
</script>
