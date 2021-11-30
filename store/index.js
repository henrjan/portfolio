export const state = () => ({
    navTarget: 'home',
    navScroll: 'home',
    navHeight: 70
  })
  
  export const getters = {
    getNavTarget (state) {
      return state.navTarget
    }
  }
  
  export const mutations = {
    setNavTarget (state, target) {
      state.navTarget = target
    },
    setNavScroll (state, target) {
      state.navScroll = target
    }
  }
  