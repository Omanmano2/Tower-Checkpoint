import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class TowerEventsService {
  async getAllEvents() {
    const res = await api.get('api/events')
    logger.log('Grabbing all events', res.data)
    AppState.events = res.data
  }

  async createEvent(newEvent) {
    const res = await api.post('api/events', newEvent)
    logger.log('Creating a event', res.data)
    AppState.projects.unshift(res.data)
    return res.data.id
  }
}

export const towerEventService = new TowerEventsService()