<template>
  <div
    class="
      sidebar
      d-md-flex
      flex-column
      justify-content-between
      bg-info
      d-none d-md-block
      text-white
    "
  >
    <div class="top-part">
      <div class="text-white py-2">
        <h4 class="text-center pt-5">The Tower</h4>
        <Auth />
      </div>
      <div class="links">
        <ul class="nav-links ps-0 text-center">
          <li class="nav-link">
            <router-link
              class="selectable rounded p-2 text-white"
              :to="{ name: 'Home' }"
            >
              Home Page
            </router-link>
          </li>
          <li class="nav-link">
            <router-link
              class="selectable rounded p-2 text-white"
              :to="{ name: 'Account' }"
            >
              Account
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
</style>