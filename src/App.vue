<template>
  <v-app>
    <v-content class="white">
      <v-container fluid pa-0 style="min-height: 100vh">
        <v-row no-gutters class="align-space-around justify-start fill-height">
          <v-col style="max-width: 80px" class="grey lighten-2" v-if="$vuetify.breakpoint.mdAndUp">
            <Sidebar app/>
          </v-col>
          <v-col style="margin-top: 45px">
            <router-view :key="$route.path" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from '@/components/main/Sidebar'

export default {
  name: 'App',
  components: { Sidebar }
}
</script>

<style>
  .text-decoration-none {
    text-decoration: none !important;
  }

  .cursor-pointer {
    cursor: pointer !important;
  }

  .fas {
    font-size: 16px;
  }
</style>
