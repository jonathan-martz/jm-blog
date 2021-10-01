<template>
  <div class="vp-articels">
    <div class="grid grid-cols-6">
      <articel-card
        v-for="(item, index) in articels"
        :key="index"
        :identifier="item.id"
        class="col-span-6 md:col-span-3 lg:col-span-2"
      ></articel-card>
    </div>
  </div>
</template>
<script>
import ArticelCard from "@/components/Articel/Card.vue";

export default {
  name: "ArticelsPage",
  components: {
    "articel-card": ArticelCard,
  },
  data() {
    return { articels: [] };
  },
  mounted() {
    this.load();
    this.$store.commit("breadcrumb-add", {
      title: "Articels",
      to: "/articels",
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
          that.articels = data.reverse();
        });
    },
  },
};
</script>
