<template>
  <div class="vc-messages">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="px-2 py-2 text-white bg-gray-400 border-2 border-green-600 rounded"
    >
      <font-awesome-icon v-if="item.icon" :icon="item.icon" class="mr-2" />
      {{ item.text }}
    </div>
  </div>
</template>
<script>
import {} from "vue";

export default {
  name: "Messages",
  data() {
    return {};
  },
  computed: {
    items: function() {
      return this.$store.state.messages.items;
    },
  },
};
</script>
