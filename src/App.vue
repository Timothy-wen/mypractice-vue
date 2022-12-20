<script>
import TopNavBar from './components/layout/TopNavBar.vue';
import { useRouter } from 'vue-router'
import { onMounted } from 'vue';
import { ref, reactive, toRef } from 'vue';
export default {
  data() {
    return {
      path: '',
    }
  },
  components: {
    TopNavBar
  },

  // 判断路由
  mounted() {
    this.path = this.$route.path
    // console.log(this.$route.path)
  },

  watch: {
    $route(to, from) {
      this.path = to.path
    }
  },

  /* 下面是试着改写vue3 */
  setup() {
    const path1 = ref('')
    //判断路由
    onMounted(() => {
      path1.value = useRouter().currentRoute.value.path
      //console.log(path1.value)
    })
    //监听路由

    return { path1 };
  },

}
</script>

<template>
  <div id="app">
    <TopNavBar
      v-show="(path === '/home' || path === '/types' || path === '/archives' || path === '/link' || path === '/blog' || path === '/tags' || path === '/about' || path === '/message' || path === '/login' || path === '/crawler' || path === '/crawlerBlog' || path === '/AI')">
    </TopNavBar>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
