<template>
  <p>PageA</p>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  export default class PageA extends Vue {
    public created() {
      // ..
    }
  }
</script>
