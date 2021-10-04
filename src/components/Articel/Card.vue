<template>
  <div class="vc-articel-card">
    <div class="mt-2 mr-2 bg-white border-2 border-black rounded md:mt-0 card">
      <header>
        <router-link :to="'/articel/' + articel.id"
          ><img
            v-if="articel.image"
            class="border-b border-black"
            :src="'https://admin.jmartz.blog' + articel.image.media.url"
        /></router-link>
      </header>
      <main class="px-2 py-2">
        <h2>
          <strong>{{ articel.title }}</strong>
        </h2>
        <br />
        {{ articel.desc }}
      </main>
      <footer class="px-2 py-2 mb-2">
        <router-link
          :to="'/articel/' + articel.id"
          class="px-2 py-2 text-blue-100 bg-blue-600 border-blue-900 rounded hover:bg-blue-400 border-1"
          >mehr</router-link
        >
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticelCard",
  data() {
    return { articel: {} };
  },
  methods: {
    load: function () {
      let that = this;
      fetch("https://admin.jmartz.blog/articels/" + this.identifier)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          that.articel = data;
        });
    },
  },
  mounted() {
    this.load();
  },
  props: {
    identifier: {
      type: Number,
      required: true,
    },
  },
};
</script>
