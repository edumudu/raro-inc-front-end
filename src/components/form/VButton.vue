<template>
  <component
    :is="tag"
    :class="{
      rounded,
      [size]: true,
      [variant]: true,
    }"
    v-on="$listeners"
    class="btn"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    tag: {
      type: String,
      default: 'button',
    },

    variant: {
      type: String,
      default: 'primary',
    },

    size: {
      type: String,
      default: 'small',
    },

    rounded: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/form/Vbutton";
</style>
