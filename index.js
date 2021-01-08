import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
import auth from './auth';

export const plugins = [vuexLocal.plugin]

export const state = () => ({
  user: null,
  categories:[],
  last_products:[],
  selectedUserOrders:[],
  searchValue:''
});

export const getters = {
  selectedOrdersLength(state) {
      return state.selectedUserOrders.length
  }
}

export const mutations = {
  addData(state, payload) {
    console.log('mutation', payload)
    state.categories = payload.categories
    state.last_products = payload.last_products
  },
  addSelectedOrder(state, payload) {
    state.selectedUserOrders.push(payload);
  },
  changeOneOrderQ(state, payload){
    console.log('payloadid', payload)
    state.selectedUserOrders.map(order => {
      if(order.id == payload.id) {
        console.log('before', order)
        order.quantity += payload.quantity;
        console.log(order)
      }
    })
  },
  deleteSelectedOrder(state, payload){
    console.log('delete seclected order', payload)
    state.selectedUserOrders.splice(state.selectedUserOrders.findIndex(order => order.id === payload.id), 1)
  },
  addSearchValue(state, payload){
    state.searchValue = payload
  }

}
export const actions = {
  getData(context, payload) {
    console.log('payload', payload);
    context.commit('addData', payload);
  },
  selectOrder(context, payload){
    context.commit('addSelectedOrder', payload);
  },
  deleteOrder(context, payload){
    context.commit('deleteSelectedOrder', payload);
  },
  changeQuantity(context, payload){
    context.commit('changeOneOrderQ', payload);
  },
  changeSearchValue(context, payload){
    context.commit('addSearchValue', payload);
  },
}
