<template>
  <div class="vc-header">
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <router-link to="/"
          ><span class="text-xl text-blue-600">{</span>
          <span class="mx-2 text-lg text-white">JM Blog</span>
          <span class="text-xl text-blue-600">}</span></router-link
        >
      </div>
      <div class="col-span-1">
        <font-awesome-icon
          v-if="$store.state.nav.toggle"
          class="float-right mt-2 text-white"
          @click="this.$store.commit('nav-toggle')"
          icon="times"
        />
        <font-awesome-icon
          v-if="!$store.state.nav.toggle"
          class="float-right mt-2 text-white"
          @click="this.$store.commit('nav-toggle')"
          icon="bars"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isMobile: function() {
      return this.$screen.width() < 468;
    },
    isTablet: function() {
      return this.$screen.width() >= 468 && this.$screen.width() <= 1024;
    },
    isDesktop: function() {
      return this.$screen.width() > 1024;
    },
  },
};
</script>
