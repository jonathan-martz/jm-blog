<template>
  <div class="vp-homepage">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-2">
        <author-card :identifier="1"></author-card>
      </div>
      <div class="col-span-6 md:col-span-4">
        <div class="grid grid-cols-6">
          <div class="col-span-6 mt-1">
            <div class="grid grid-cols-2">
              <div class="col-span-2 md:col-span-1">
                <a href="https://github.com/jonathan-martz/" target="_blank" class="flex px-2 py-2 mt-2 text-black bg-white border-2 border-black xs:col-span-1">
                  <font-awesome-icon class="fa-2x" :icon="['fab', 'github']" />
                  <span class="mt-1 ml-2">jonathan-martz</span>
                </a>
              </div>
              <div class="col-span-2 md:col-span-1">
                <a href="https://de.linkedin.com/in/jonathan-martz-3066a6172" target="_blank" class="flex px-2 py-2 mt-2 text-black bg-white border-2 border-black xs:col-span-1 md:ml-2">
                  <font-awesome-icon class="fa-2x" :icon="['fab', 'linkedin']" />
                  <span class="mt-1 ml-2">Jonathan Martz</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-span-6 mt-1"><h2>Artikel:</h2></div>
          <div
            v-for="(item, index) in articels"
            :key="index"
            class="col-span-6 xs:col-span-3"
          >
            <articel-card :identifier="item.id"></articel-card>
          </div>
          <div class="col-span-6 mt-2">
            <router-link
              to="/articels"
              class="block px-2 py-2 mr-2 text-center text-white bg-blue-500 border-black rounded border-1"
              >mehr Artikel</router-link
            >
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
