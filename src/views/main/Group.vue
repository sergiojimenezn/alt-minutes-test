<template>
  <v-row no-gutters class="align-space-around justify-start fill-height">
    <v-col style="max-width: 284px" v-if="$vuetify.breakpoint.mdAndUp">
      <Menu/>
    </v-col>
    <v-col cols="12" v-if="!$vuetify.breakpoint.mdAndUp">
      <Menu/>
    </v-col>
    <v-col>
      <v-row no-gutters class="fill-height">
        <v-col cols="12">
          <Invite/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Menu from '@/components/main/Menu'
import Invite from '@/components/group/Invite'

export default {
  components: { Menu, Invite }
}
</script>
