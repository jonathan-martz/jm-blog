<template>
  <div class="px-3 vc-breadcrumb">
    <nav>
      <ol class="flex breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" >Home</router-link>
        </li>
        <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
          <router-link :to="item.to">{{ item.title }}</router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Breadcrumb",
  setup() {
    const store = useStore();

    let items = computed(() => {
      return store.state.breadcrumb.items;
    });

    return {
      items,
    };
  },
};
</script>
<style lang="less" scoped>
.breadcrumb-item {
  &::after {
    content: " > ";
  }

  &:last-child {
    &::after {
      content: "";
    }
  }
}
</style>
