<template>
  <div class="home">
    <section class="section-page-header">
      <picture>
        <source media="(min-width: 992px)" srcset="https://picsum.photos/id/778/1280/768"/>

        <img
          src="https://picsum.photos/id/778/650"
          alt="page header background"
          class="page-header-packground"
        />
      </picture>

      <div class="container">
        <div class="page-header">
          <div>
            <div class="banner">
              <h4 class="banner-uppertitle">
                Vida Toda
              </h4>

              <h1 class="banner-title">
                Bem Estar
              </h1>

              <p class="banner-slogan">
                Soluções completas para vivier mais e melhor
              </p>

              <v-button
                tag="a"
                href="//example.com"
                size="large"
              >
                Quero uma consultoria
              </v-button>
            </div>

            <catchphrase-card
              title="Pense nisso.."
              :description="`O quanto o diagnóstico de uma doença grave, internação ou cirurgia
              inesperada pode afeter, hoje, sua vida pessoal e financeira?`"
            />
          </div>

          <div>
            <form-schedule class="form-schedule" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <section-title>
          Blog
        </section-title>

        <div class="cards-wrapper">
          <post-card
            v-for="post in posts"
            :key="post.id"
            :cover="post.cover"
            :title="post.title"
            :description="post.body"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Post } from '@/interfaces/posts';
import FormSchedule from '@/components/FormSchedule.vue';
import VButton from '@/components/form/VButton.vue';
import PostCard from '@/components/cards/PostCard.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import CatchphraseCard from '@/components/cards/CatchphraseCard.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    VButton,
    PostCard,
    FormSchedule,
    SectionTitle,
    CatchphraseCard,
  },

  data: () => ({
    perPage: 10,
    totalPosts: 0,
    posts: [] as Post[],
    isLoading: false,
  }),

  created() {
    this.fetchPosts(this.currentPage, this.perPage);
    document.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    this.removeScrollListener();
  },

  computed: {
    currentPage(): number {
      return Math.max(Math.ceil(this.posts.length / this.perPage), 1);
    },

    maxPages(): number {
      return Math.ceil(this.totalPosts / this.perPage);
    },
  },

  methods: {
    async fetchPosts(_page: number, _limit: number): Promise<void> {
      this.isLoading = true;

      try {
        const { data, headers } = await this.$axios.get<Post[]>('/posts', {
          params: {
            _page,
            _limit,
          },
        });

        this.totalPosts = headers['x-total-count'];

        this.posts = [
          ...this.posts,
          ...data.map((post) => ({ ...post, cover: 'https://picsum.photos/450' })),
        ];
      } catch (error) {
        alert('An error has occured when fetching new posts, try again later');
      } finally {
        this.isLoading = false;
      }
    },

    handleScroll() {
      const gapToFetchPosts = 260;
      const { pageYOffset, innerHeight } = window;
      const distanceUntilEnd = document.body.offsetHeight - (pageYOffset + innerHeight);

      if (distanceUntilEnd <= gapToFetchPosts && !this.isLoading) {
        if (this.currentPage + 1 >= this.maxPages) this.removeScrollListener();

        this.fetchPosts(this.currentPage + 1, this.perPage);
      }
    },

    removeScrollListener() {
      document.removeEventListener('scroll', this.handleScroll);
    },
  },

});
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/pages/home";
</style>
