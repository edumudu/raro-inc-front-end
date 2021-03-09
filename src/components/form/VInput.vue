<template>
  <label>
    <h3 class="label">
      {{ label }}:
    </h3>

    <input
      v-model="inputValue"
      ref="input"
      class="field"
      :type="type"
      v-bind="$attrs"
      v-on="listeners"
    />
  </label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  inheritAttrs: false,

  props: {
    label: {
      type: String,
      required: true,
    },

    value: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },
  },

  computed: {
    inputValue: {
      get(): string {
        return this.value;
      },

      set(newValue: string): void {
        this.$emit('input', newValue);
      },
    },

    // eslint-disable-next-line @typescript-eslint/ban-types
    listeners(): Record<string, Function | Function[]> {
      const { input, ...listeners } = this.$listeners;

      return listeners;
    },
  },
});
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/form/VInput";
</style>
