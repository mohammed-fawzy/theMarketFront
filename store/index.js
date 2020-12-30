export const state = () => ({
  categories:[],
  last_products:[],
});


export const mutations = {
  addData(state, payload) {
    console.log('mutation', payload)
    state.categories = payload.categories
    state.last_products = payload.last_products
  }
}

export const actions = {
  getData(context, payload) {
    console.log('payload', payload);
    context.commit('addData', payload);
  }
}
