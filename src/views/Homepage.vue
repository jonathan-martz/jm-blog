<template>
  <div class="vp-homepage">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-2">
        <author-card :identifier="1"></author-card>
      </div>
      <div class="col-span-6 md:col-span-4">
        <div class="grid grid-cols-6">
          <div class="col-span-6 mt-1"><h2>Artikel:</h2></div>
          <div
            v-for="(item, index) in articels"
            :key="index"
            class="col-span-6 xs:col-span-3"
          >
            <articel-card :identifier="item.id"></articel-card>
          </div>
          <div class="col-span-6 mt-2">
            <router-link to="/articels" class="block px-2 py-2 mr-2 text-center text-white bg-blue-500 border-black rounded border-1">mehr Artikel</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticelCard from "@/components/Articel/Card.vue";
import AuthorCard from "@/components/Author/Card.vue";

export default {
  name: "Homepage",
  data() {
    return {
      articels: [],
    };
  },
  components: {
    "articel-card": ArticelCard,
    "author-card": AuthorCard,
  },
  mounted() {
    this.load();
    
    this.$store.commit("breadcrumb-add", {
      title: "Home",
      to: "/",
    });
  },
  methods: {
    load: function() {
      let that = this;
      fetch("https://admin.jmartz.blog/articels")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          that.articels = data.slice(-6).reverse();
        });
    },
  },
};
</script>
