<template>
  <div class="text-white py-4">
    <div class="text-center" v-if="account.id">
      <img
        :src="account.picture"
        alt=""
        class="rounded selectable"
        height="45"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="account-dropdown"
      />
      <ul class="dropdown-menu" aria-labelledby="account-dropdown">
        <li>
          <router-link
            class="dropdown-item"
            :to="{
              name: 'Account',
            }"
          >
            Account
          </router-link>
        </li>
      </ul>
      <button class="btn selectable text-danger" @click="logout" title="Logout">
        <p class="font-monospace">LOGOUT</p>
      </button>
    </div>
    <div v-else class="text-center pt-3">
      <button class="btn selectable text-warning bg-dark" @click="login">
        <b class="align-items-center"> Login </b>
      </button>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/runtime-core'
import { AuthService } from '../services/AuthService.js'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      login() {
        AuthService.loginWithRedirect()
      },
      async logout() {
        const yes = await Pop.confirm('Are you sure you want to logout', '', 'warning')
        if (!yes) { return }
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>