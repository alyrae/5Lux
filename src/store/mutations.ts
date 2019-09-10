import * as interfaces from '@/interfaces/interfaces'

export default {
  mutationShowHasApp (state: interfaces.IState, payload: boolean) {
    state.showHasApp = payload
  },
  mutationHomeSwiper (state: interfaces.IState, payload: interfaces.IHomeSwiperItem[]) {
    state.homeSwiper = payload
  },
  mutationHomeNav (state: interfaces.IState, payload: interfaces.IHomeNavItem[]) {
    state.homeNav = payload
  }
}
