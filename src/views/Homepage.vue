<template>
  <div class="vp-homepage">
    <div class="grid grid-cols-6">
      <div
        v-for="(item, index) in articels"
        :key="index"
        class="col-span-6 xs:col-span-3 md:col-span-2"
      >
        <div class="mt-2 mr-2 bg-white border-2 border-black rounded card">
          <header>
            <img
            class="border-b border-black"
              src="https://via.placeholder.com/600x380.png?text=Jmartz+Blog"
            />
          </header>
          <main class="px-2 py-2">
            <strong>{{ item.title }}</strong
            ><br />
            {{ item.desc }}
          </main>
          <footer class="px-2 py-2 mb-2">
            <router-link
              :to="'/news/' + item.id"
              class="px-2 py-2 text-blue-100 bg-blue-600 border-blue-900 rounded hover:bg-blue-400 border-1"
              >more</router-link
            >
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      articels: [],
    };
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
          that.articels = data.slice(-6);
        });
    },
  },
};
</script>
