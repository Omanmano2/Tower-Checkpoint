<template>
  <div class="d-flex text-start ps-5 pt-3">
    <p class="fs-1 font-monospace fw-bold text-info pe-4">TOWER</p>
    <img
      class="logo"
      src="https://png2.cleanpng.com/sh/82e1437d77906eb5bcf1b09edace557d/L0KzQYi4UcI4N5Y4SZGAYUHmQ4e7gBQzQJU7S5CEM0e7RYGAVcE2OWI8Uao8NEi7RoO7TwBvbz==/5a1c364cd28d63.9378507515117983488624.png"
      alt="logo"
    />
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-4">
        <div class="hero-image rounded border border-info border-3">
          <div class="hero-text text-white font-monospace p-4 fs-4">
            <p>Get ahead of the scalpers.</p>
            <p>Reserve your seat now with</p>
            <p>Real events for real people</p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-md-3 p-4" v-for="e in events" :key="e.i" d>
            <div class="card border border-info border-3">
              <img :src="e.coverImg" class="card-img-top" alt="eventPic" />
              <div class="card-body">
                <h5
                  class="card-title text-uppercase font-monospace fw-bold fs-4"
                >
                  {{ e.name }}
                </h5>
                <p class="font-monospace fs-6">{{ e.location }}</p>
                <p class="font-monospace fs-6">
                  {{ new Date(e.startDate).toDateString() }}
                </p>
                <p class="card-text"></p>
                <div class="d-flex justify-content-end">
                  <p class="pe-4 text-info fs-5 fw-bold font-monospace">
                    {{ e.capacity }}
                  </p>
                  <p class="fs-5 fw-bold font-monospace">Spots Left</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { towerEventService } from "../services/TowerEventsService"
import { AppState } from "../AppState"
export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        await towerEventService.getAllEvents()
      } catch (error) {
        Pop.toast(error.message, "error")
        logger.log(error)
      }
    })
    return {
      user: computed(() => AppState.user),
      events: computed(() => AppState.events)
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  max-width: 50px;
  max-height: 50px;
}
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80");
  height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
