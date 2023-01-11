<template>
  <div class="Breadcrumb">
    <a-button v-if="back" size="small" class="Breadcrumb_back" @click="$router.back()"
      >返回</a-button
    >
    <a-breadcrumb>
      <a-breadcrumb-item v-if="title" class="text-normal-12 black"> {{ title }} </a-breadcrumb-item>
      <template v-else>
        <template v-for="item in levelList">
          <a-breadcrumb-item :key="item.path" v-if="item.meta.title">
            <span
              v-if="levelList.indexOf(item) === levelList.length - 1"
              class="text-normal-12 black"
            >
              {{ item.meta.title }}
            </span>
            <router-link v-else :to="item.path" class="text-normal-12 gray-95">
              {{ item.meta.title }}
            </router-link>
          </a-breadcrumb-item>
        </template>
      </template>
    </a-breadcrumb>
    <div class="Breadcrumb_right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    created() {
      this.getBreadcrumb();
    },
    data() {
      return {
        levelList: null,
      };
    },
    props: {
      back: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: '',
      },
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      },
    },
    methods: {
      getBreadcrumb() {
        const matched = this.$route.matched.filter((item) => item.name);
        this.levelList = matched;
      },
    },
  };
</script>

<style lang="less" scoped>
  .Breadcrumb {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 48px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

    &_back {
      margin-right: 8px;
    }
    &_right {
      margin-left: auto;
    }
  }
</style>
