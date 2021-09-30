<template>
  <div class="vp-articel">
      <h2>{{articel.title}}</h2>
    <p>{{articel.desc}}</p>
    <div class="content" v-html="articel.content"></div>
  </div>
</template>

<script>
export default {
  name: "ArticelPage",
  data() {
    return {
      articel: {},
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function() {
      let that = this;
      fetch("https://admin.jmartz.blog/articels/"+this.$route.params.id)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          that.articel = data;
        });
    },
  },
};
</script>

<style></style>
