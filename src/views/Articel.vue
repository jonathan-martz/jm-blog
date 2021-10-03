<template>
  <div class="vp-articel">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 sm:col-span-2">
        <img
          v-if="articel.image"
          :src="'https://admin.jmartz.blog' + articel.image.media.url"
          alt="Articel Image"
          class="block articel-image"
        />
      </div>
      <div class="col-span-6 sm:col-span-4">
        <h2>
          <strong>{{ articel.title }}</strong>
        </h2>
        <br />
        <p>{{ articel.desc }}</p>
        <br />
        <div class="content" v-html="articel.content"></div>
      </div>
    </div>
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
    load: function () {
      let that = this;
      fetch("https://admin.jmartz.blog/articels/" + this.$route.params.id)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          that.articel = data;
        });
    },
  },
};
</script>

<style></style>
