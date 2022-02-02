<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-10 viewport">
        <router-view />
      </div>
      <div class="col-md-2">
        <SideBar />
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.viewport {
  height: 100vh;
  overflow-y: auto;
}
.sidebar {
  height: 100vh;
}
</style>
