import { defineStore } from 'pinia'
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll'

export const useScrollLockStore = defineStore('scrollLock', {
  state: () => ({
    isPageScrollDisabled: false,
  }),
  actions: {
    lockScroll() {
      this.isPageScrollDisabled = true
      disablePageScroll()
    },
    unlockScroll() {
      this.isPageScrollDisabled = false
      enablePageScroll()
    },
    toggleScrollLock() {
      this.isPageScrollDisabled = !this.isPageScrollDisabled
      this.isPageScrollDisabled ? disablePageScroll() : enablePageScroll()
    },
  },
})
