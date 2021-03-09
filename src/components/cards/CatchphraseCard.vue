<template>
  <div class="catchphrase">
    <h3 class="catchphrase-title">
      {{ title }}
    </h3>

    <p class="catchphrase-phrase">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/cards/CatchphraseCard";
</style>
