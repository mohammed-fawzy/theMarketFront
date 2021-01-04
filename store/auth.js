// import axios from 'axios';
const state = {
     user: null,
};
const getters = {
     isAuthenticated: state => !!state.user,
     StateUser: state => state.user,
};
const actions = {
     async LogIn({commit}, User) {
          console.log('action login', User)
          await this.$axios.$post(`api/auth/login`, User).then((response) => { 
               if(response.status == true){
                    console.log('response.data', response)
                    commit('setUser', response.data)
               }
          })
     },
     async LogOut({commit}){
          let user = null
          commit('LogOut', user)
     },
     async updateUser({commit}, user){
          commit('updatedUser', user)
     }
};
const mutations = {
     setUser(state, user){
         state.user = user
     },
     updatedUser(state, user) {
          state.user  = Object.assign(state.user, user);
     },
     LogOut(state){
         state.user = null
     },
 };
export default {
  state,
  getters,
  actions,
  mutations
};

export const namespaced = true