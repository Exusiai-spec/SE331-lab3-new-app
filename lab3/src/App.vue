<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)

// 监听 popstate 事件
const handlePopState = () => {
  const scrollPosition = JSON.parse(sessionStorage.getItem('scrollPosition') || '{}');
  if (scrollPosition) {
    window.scrollTo(scrollPosition.x, scrollPosition.y);
  }
};

// 保存滚动位置
const handleScroll = () => {
  sessionStorage.setItem('scrollPosition', JSON.stringify({
    x: window.scrollX,
    y: window.scrollY
  }));
};

// 在组件挂载时添加事件监听器
onMounted(() => {
  window.addEventListener('popstate', handlePopState);
  window.addEventListener('scroll', handleScroll);
});

// 在组件卸载时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('popstate', handlePopState);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div id="layout">
    <header>
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'passenger' }">Passenger</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>

</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;

}

nav a.router-link-exact-active {
  color: #42b983;

}

h2 {
  font-size: 20px;
}

@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}
#flashMessage {
  animation: yellofade 3s ease-in-out;
}

</style>