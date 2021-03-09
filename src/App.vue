<template>
  <div id="app">
    <div class="container">
      <VButton>
        small
      </VButton>

      <VButton rounded>
        small rounded
      </VButton>

      <VButton size="large">
        Large
      </VButton>

      <VButton size="large" rounded>
         Large Rounded
      </VButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VButton from '@/components/form/VButton.vue';

export default Vue.extend({
  name: 'App',
  components: { VButton },

  data: () => ({
    posts: [],
    isLoading: false,
  }),

  created() {
    this.fetchPosts();
  },

  methods: {
    async fetchPosts() {
      try {
        const { data } = await this.$axios.get('/posts');
        console.log(data);
      } catch (error) {
        alert('An error has occured');
      }
    },
  },
});
</script>

<style lang="scss">
  @import "@/assets/scss/general";
</style>
