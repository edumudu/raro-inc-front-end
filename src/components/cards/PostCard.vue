<template>
  <article class="card">
    <div class="head">
      <img
        :src="cover"
        :alt="title"
        class="cover"
      />
    </div>

    <div class="body">
      <h2 class="title">
        {{ title }}
      </h2>

      <p class="description">
        {{ description }}
      </p>
    </div>

    <div class="footer">
      <v-button
        tag="a"
        href="//example.com"
        size="small"
        rounded
      >
        Continuar
      </v-button>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';

import VButton from '@/components/form/VButton.vue';

export default Vue.extend({
  components: { VButton },

  props: {
    cover: {
      type: String,
      required: true,
    },

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
  @import "@/assets/scss/cards/PostCard";
</style>
