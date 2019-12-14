<template>
  <v-row no-gutters :class="`align-space-around justify-start fill-height pt-2 ${ $vuetify.breakpoint.smAndDown ? 'px-6' : 'px-10' }`" style="padding-bottom: 200px">
    <v-col sm="12" md="11" class="mr-auto">
      <Toolbar/>
      <v-row no-gutters>
        <v-col sm="12" md="9" class="mx-auto">
          <!-- Intro -->
          <v-row no-gutters class="mt-10" style="margin-bottom: 64px">
            <v-col sm="12" md="6">
              <v-img width="280" height="240" class="mx-auto" src="/assets/images/Group-4.svg"/>
            </v-col>
            <v-col sm="12" md="6" :class="`${ $vuetify.breakpoint.smAndDown ? 'pt-5' : '' }`">
              <div class="title font-weight-bold mb-5">
                Invite your friends to enjoy the following benefits:
              </div>
              <div class="body-2 mb-4">
                <div class="font-weight-bold mb-2">For Free Plan Users</div>
                Free trial of standard plan for one month
              </div>
              <div class="body-2">
                <div class="font-weight-bold mb-2">For Standard Business Plan Users</div>
                <div class="mb-2">
                  Additional recording time: <span class="primary--text font-weight-bold">60 minutes / person</span>
                </div>
                <div class="mb-2">
                  Additional number of characters in the translated document: <span class="primary--text font-weight-bold">10,000 characters / person</span>
                </div>
                <div class="mb-2">
                  Additional storage: <span class="primary--text font-weight-bold">100MB / person</span>
                </div>
              </div>
            </v-col>
          </v-row>
          <!-- Share input -->
          <v-row no-gutters class="d-flex flex-column" style="margin-bottom: 64px">
            <div class="subtitle font-weight-bold mb-1">
              Share via email
            </div>
            <div class="body-2 grey--text text--darken-1 mb-2">
              Multiple names can be entered with space key or comma
            </div>
            <div :class="`d-flex ${ $vuetify.breakpoint.smAndDown ? 'flex-column' : 'flex-row' }`">
              <v-combobox
                v-model="emails"
                outlined
                color="primary"
                min-height="60"
                :items="dummyEmails"
                :delimiters="[',',' ']"
                placeholder="Select emails..."
                style="border-radius: 10px"
                multiple
                chips
                deletable-chips
                hide-selected
                hide-details
              >
              </v-combobox>
              <v-btn
                color="primary"
                :class="`white--text my-auto mx-4 ${ $vuetify.breakpoint.smAndDown ? 'mt-3' : '' }`"
                style="border-radius: 10px"
                depressed
                height="50"
              >
                Send Invites
              </v-btn>
            </div>
          </v-row>
          <!-- Social link -->
          <v-row no-gutters style="margin-bottom: 64px">
            <v-hover
              v-for="social in socials"
              :key="social"
              v-slot:default="{ hover }"
            >
              <v-btn
                color="primary"
                :class="`${ hover ? '' : 'grey lighten-4' } primary--text ${ $vuetify.breakpoint.smAndDown ? 'mx-auto my-2' : 'mx-4 my-auto' } text-none`"
                style="border-radius: 10px"
                depressed
                outlined
                height="50"
              >
                <v-icon color="primary" class="mr-2">{{ icons[social] }}</v-icon> Share via <span class="text-capitalize ml-1">{{ social }}</span>
              </v-btn>
            </v-hover>
          </v-row>
          <!-- Share referral -->
          <v-row no-gutters class="d-flex flex-column" style="margin-bottom: 64px">
            <div class="subtitle font-weight-bold mb-2">
              Share your referral link
            </div>
            <v-text-field
              v-model="referralLink"
              single-line
              solo
              filled
              flat
              readonly
              background-color="grey lighten-4"
            >
              <template v-slot:prepend-inner>
                <v-icon class="mr-2">{{ icons.link }}</v-icon>
              </template>
              <template v-slot:append>
                <v-btn text color="primary">Copy link</v-btn>
              </template>
            </v-text-field>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Toolbar from '@/components/main/Toolbar'
import { mdiFacebook, mdiTwitter, mdiLinkedin, mdiLink } from '@mdi/js'

export default {
  components: { Toolbar },
  data: () => {
    return {
      icons: {
        facebook: mdiFacebook,
        twitter: mdiTwitter,
        linkedin: mdiLinkedin,
        link: mdiLink
      },
      emails: [],
      dummyEmails: ['jack@sparrow.com', 'anais.blick@gillian.net'],
      socials: ['facebook', 'twitter', 'linkedin'],
      referralLink: 'https://otter.ai/referrals/9CBGLZLS'
    }
  }
}
</script>
