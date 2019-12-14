<template>
  <v-row no-gutters :class="`align-start justify-start fill-height ${ $vuetify.breakpoint.smAndDown ? 'px-5' : 'pl-5' }`">
    <v-col cols="12" v-if="$vuetify.breakpoint.mdAndUp">
      <div class="d-flex mb-7">
        <v-img contain max-width="165" height="44" src="/assets/images/logo.svg"></v-img>
        <v-spacer></v-spacer>
        <v-btn icon depressed>
          <v-icon color="grey darken-3">{{ icons.menu }}</v-icon>
        </v-btn>
      </div>
      <div class="headline mb-5 font-weight-bold">alt group</div>
      <div>
        <v-list>
          <v-list-group
            v-for="(option, index) in options" :key="option.text"
            v-model="selected[index]"
          >
            <div slot="activator" class="d-flex mr-n7 py-4" style="width: 236px">
              <img class="mr-4" height="24" width="24" :src="icons[option.text]"/>
              <!-- {{ icons[option.text] }}</v-icon> -->
              <div class="text-capitalize font-weight-bold">{{ option.text }}</div>
              <v-spacer></v-spacer>
              <v-avatar color="primary" size="24" v-if="option.notifications > 0">
                <span class="white--text caption">{{ option.notifications }}</span>
              </v-avatar>
            </div>
            <template v-slot:appendIcon>
              <v-icon>{{ selected[index] ? icons.minus : icons.plus }}</v-icon>
            </template>
            <v-list-item
              v-for="index in 3"
              :key="index"
              link
            >
              <v-list-item-title>{{`${ option.text } option ${ index + 1 }`}}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </div>
    </v-col>
    <v-col v-else>
      <div class="d-flex mb-7">
        <v-img contain max-width="165" height="44" src="/assets/images/logo.svg"></v-img>
        <v-spacer></v-spacer>
        <v-btn icon depressed>
          <v-icon color="grey darken-3" @click="drawer = !drawer">{{ icons.menu }}</v-icon>
        </v-btn>
      </div>
      <v-navigation-drawer persistent v-model="drawer" clipped fixed width="230" disable-resize-watcher>
        <div class="headline mb-5 font-weight-bold pt-5 px-5">alt group</div>
        <div>
          <v-list>
            <v-list-group
              v-for="(option, index) in options" :key="option.text"
              v-model="selected[index]"
            >
              <div slot="activator" class="d-flex mr-n7 py-4" style="width: 236px">
                <img class="mr-4" height="24" width="24" :src="icons[option.text]"/>
                <div class="text-capitalize font-weight-bold">{{ option.text }}</div>
                <v-spacer></v-spacer>
                <v-avatar color="primary" size="24" v-if="option.notifications > 0">
                  <span class="white--text caption">{{ option.notifications }}</span>
                </v-avatar>
              </div>
              <template v-slot:appendIcon>
                <v-icon>{{ selected[index] ? icons.minus : icons.plus }}</v-icon>
              </template>
              <v-list-item
                v-for="index in 3"
                :key="index"
                link
              >
                <v-list-item-title>{{`${ option.text } option ${ index + 1 }`}}</v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list>
        </div>
      </v-navigation-drawer>
    </v-col>
  </v-row>
</template>

<script>
import {
  mdiMenu,
  mdiPlus,
  mdiMinus
} from '@mdi/js'

export default {
  name: 'App',
  data: () => {
    return {
      drawer: false,
      selected: [],
      icons: {
        menu: mdiMenu,
        conversations: '/assets/icons/conversations.svg',
        group: '/assets/icons/group.svg',
        operator: '/assets/icons/operator.svg',
        salespartner: '/assets/icons/salespartner.svg',
        'alt admin': '/assets/icons/alt-admin.svg',
        plus: mdiPlus,
        minus: mdiMinus
      },
      options: [
        {
          text: 'conversations',
          notifications: 0
        },
        {
          text: 'group',
          notifications: 0
        },
        {
          text: 'operator',
          notifications: 2
        },
        {
          text: 'salespartner',
          notifications: 7
        },
        {
          text: 'alt admin',
          notifications: 4
        }
      ]
    }
  }
}
</script>
