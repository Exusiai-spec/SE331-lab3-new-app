import type { PassageState, PassengerData } from '@/types'
import { defineStore } from 'pinia'
export const useEventStore = defineStore('event', {
  state: (): PassageState => ({
    passengerData: null
  }),
  actions: {
    setEvent(event: PassengerData): void {
      this.passengerData = event
    }
  }
})
