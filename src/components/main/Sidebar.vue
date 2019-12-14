<template>
  <v-row no-gutters class="align-start justify-center fill-height" style="min-height: 100vh">
    <v-col cols="12">
      <v-row
        v-for="option in options"
        :key="option.name"
        class="align-start justify-center my-5"
      >
        <!-- For the sake of this test used divs to simulate vuetify buttons since vuetify buttons have min-width: 56px and this required 40px, avatars are 48px -->
        <v-badge overlap right>
          <template v-slot:badge v-if="option.notifications > 0">
            <div>{{ option.notifications }}</div>
          </template>
          <div
            v-ripple
            style="height: 40px; width: 40px; border-radius: 10px;"
            :class="`align-center justify-center ${ option.color } white--text title text-center mx-auto cursor-pointer pt-1`"
          >
            {{ option.name }}
          </div>
        </v-badge>
      </v-row>
      <!-- Add button -->
      <v-row class="align-start justify-center my-5">
        <div
          v-ripple
          style="height: 40px; width: 40px; border-radius: 10px"
          class="align-center justify-center grey lighten-1 white--text title text-center mx-auto cursor-pointer pt-1"
        >
          <v-icon small color="black">{{ icons.plus }}</v-icon>
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mdiPlus } from '@mdi/js'

export default {
  name: 'App',
  data: () => {
    return {
      icons: {
        plus: mdiPlus
      },
      options: [
        {
          name: 'K',
          color: 'orange',
          notifications: 0
        },
        {
          name: 'al+',
          color: 'blue-grey darken-4',
          notifications: 0
        },
        {
          name: 'MD',
          color: 'black',
          notifications: 2
        }
      ]
    }
  }
}
</script>
