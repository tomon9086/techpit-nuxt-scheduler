<template>
  <v-container>
    <!-- タイトル入力 -->
    <v-text-field
      label="Title"
      required
      counter
      maxlength="25"
    />

    <!-- 詳細入力 -->
    <v-textarea
      label="Description"
      counter
      maxlength="200"
    />

    <!-- 時刻選択 -->
    <v-time-picker format="24hr" />

    <!-- 日付選択 -->
    <v-date-picker
      no-title
      bottom
      color="primary"
    />

    <!-- 日時選択解除 -->
    <v-list
      class="overflow-y-auto"
      max-height="75vh"
    >
      <v-list-item align="start">
        <v-list-item-content>
          <v-list-item-title>
            2021/01/01
          </v-list-item-title>
          <v-list-item-subtitle>
            19:00 ~ 21:00
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon color="accent">
            mdi-delete
          </v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
