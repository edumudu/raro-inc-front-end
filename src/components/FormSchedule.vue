<template>
  <form
    class="form"
    @submit.prevent="handleSubmit"
  >
    <h2 class="title">
      Pronto para planejar seu sossego?
    </h2>

    <p class="desciption">
      Agende uma consultoria sem compromisso pelo formulario abaixo!
    </p>

    <div class="body">
      <v-input
        name="name"
        label="Nome"
      />

      <v-input
        name="email"
        type="email"
        label="E-mail"
      />

      <v-input
        name="maritial-status"
        label="Estado Civil"
      />

      <v-input
        name="profission"
        label="Profissão"
      />

      <v-input
        name="monthly-income"
        label="Telefone/Whatsapp"
      />

      <v-input
        name="name"
        label="Renda Mensal"
      />

      <div class="bottom">
        <v-button
          type="submit"
          rounded
        >
          Enviar
        </v-button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import VInput from '@/components/form/VInput.vue';
import VButton from '@/components/form/VButton.vue';

export default Vue.extend({
  components: {
    VInput,
    VButton,
  },

  methods: {
    handleSubmit() {
      //
    },
  },
});
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/FormSchedule";
</style>
