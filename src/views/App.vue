<template>
  <div>
    <h2>
      Vue Typescript Example
    </h2>
    <nav>
      <router-link to="/page/a">PageA</router-link>
      <router-link to="/page/b">PageB</router-link>
    </nav>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  export default class App extends Vue {
  }
</script>

<style>
  p {
    color: #09f;
  }
</style>
