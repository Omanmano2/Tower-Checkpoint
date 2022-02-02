
  <template>
  <form @submit.prevent="createEvent">
    <div class="form-group">
      <label for="name">Name...</label>
      <input
        placeholder="Name"
        type="text"
        class="form-control"
        name="name"
        id="name"
        min="2"
        max="50"
        required
      />
    </div>
    <div class="form-group">
      <label for="description">Description...</label>
      <input
        placeholder="Description"
        type="text"
        class="form-control"
        name="description"
        id="description"
        min="2"
        max="50"
        required
      />
    </div>
    <div class="form-group">
      <label for="coverImg">Image</label>
      <input
        placeholder="CoverImg"
        type="text"
        class="form-control"
        name="coverImg"
        id="coverImg"
        min="2"
        max="50"
        required
      />
    </div>
    <div class="form-group">
      <label for="location">location</label>
      <input
        placeholder="Location"
        type="text"
        class="form-control"
        name="locaiton"
        id="location"
        min="2"
        max="50"
        required
      />
    </div>
    <div class="form-group">
      <label for="capacity">Capacity</label>
      <input
        placeholder="Capacity"
        type="number"
        class="form-control"
        name="capacity"
        id="capacity"
        required
      />
    </div>
    <div class="form-group">
      <label for="startDate">startDate</label>
      <input
        placeholder="StartDate"
        type="Date"
        class="form-control"
        name="startDate"
        id="startDate"
        min="2"
        max="50"
        required
      />
      <div class="form-group">
        <label for=" ">type</label>
        <input
          placeholder="Choose One: Concert, Convetion, Sport, Digital"
          type="text"
          class="form-control"
          name="type"
          id="type"
          min="2"
          max="50"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-between my-2">
      <button
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close"
        class="btn btn-danger"
      >
        <b>Cancel</b>
      </button>
      <button
        type="Submit"
        aria-label="Create"
        data-bs-dismiss="modal"
        class="btn btn-info"
      >
        <b>Create</b>
      </button>
    </div>
  </form>
</template>



<script>
import { Modal } from "bootstrap"
import { towerEventService } from "../services/TowerEventsService"
import Pop from "../utils/Pop"
import { ref } from "@vue/reactivity"

export default {
  setup() {
    const editable = ref({})
    return {
      async createEvent() {

        try {
          await towerEventService.createEvent(editable.value)
          Modal.getOrCreateInstance(document.getElementById('create-event')).hide()
        } catch (error) {
          Pop.toast(error.message)
        }


      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>