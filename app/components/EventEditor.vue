<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- タイトル入力 -->
        <v-text-field
          v-model="title"
          label="Title"
          required
          counter
          maxlength="25"
        />
        <!-- 詳細入力 -->
        <v-textarea
          v-model="description"
          label="Description"
          counter
          maxlength="200"
        />
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <!-- 時刻選択 -->
            <v-time-picker
              v-model="time"
              format="24hr"
            />
          </v-col>
          <v-col>
            <!-- 日付選択 -->
            <v-date-picker
              no-title
              bottom
              color="primary"
              @change="addDate"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <!-- 日時選択解除 -->
        <v-list
          class="overflow-y-auto"
          max-height="75vh"
        >
          <div v-if="dates.length === 0">
            Click Calendar to add date!
          </div>
          <date-list-item
            v-for="v in dates"
            :key="v.id"
            :date="v.from"
          />
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      title: '',
      description: '',
      time: '19:00',
      dates: [{
        id: 1,
        from: DateTime.now()
      }]
    }
  },
  watch: {
    value () {
      this.title = this.value.title
      this.description = this.value.description
    },
    title () {
      this.changeEvent()
    },
    description () {
      this.changeEvent()
    }
  },
  methods: {
    changeEvent () {
      this.$emit('change', {
        title: this.title,
        description: this.description,
        dates: this.dates
      })
    },
    addDate (d) {
      const time = DateTime.fromFormat(this.time, 'HH:mm')
      const date = DateTime
        .fromISO(d)
        .set({
          hour: time.hour,
          minute: time.minute
        })
      this.dates = [
        ...this.dates,
        {
          id: +new Date(),
          from: date
        }
      ]
      this.changeEvent()
    }
  }
}
</script>

<style scoped>
</style>
