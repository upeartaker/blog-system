export const state = () => ({
    userLogin: false
})
  
export const mutations = {
    toLogin (state) {
      state.userLogin = !state.userLogin
    }
}