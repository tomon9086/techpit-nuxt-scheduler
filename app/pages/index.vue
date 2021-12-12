<template>
  <v-container>
    <event-editor v-model="event" />
    <v-btn
      fixed
      elevation="2"
      fab
      large
      bottom
      right
      color="primary"
    >
      Go!
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      event: {}
    }
  },
  head () {
    return {
      title: 'New Event'
    }
  }
}
</script>
