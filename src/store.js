import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    flexItemGroup: [
      {
        flex: 1,
        customWidth: '',
      },
    ],
    flexGroupDirection: 'flexdir-row',
  },
  getters: {
    getFlexGroup: state => state.flexItemGroup,
    getFlexGroupItem: state => index => state.flexItemGroup[index],
  },
  mutations: {
    addItemToGroup_STORE(state) {
      console.log('mutation');
      state.flexItemGroup.push({
        flex: 1, customWidth: '',
      });
    },
    removeItemFromGroup_STORE(state, index) {
      if (index) {
        state.flexItemGroup.splice(index, 1);
      } else {
        state.flexItemGroup.splice(state.flexItemGroup.length - 1, 1);
      }
    },
  },
  actions: {
    addItemToGroup_STORE(context) {
      console.log('action');
      context.commit('addItemToGroup_STORE');
    },
    removeItemFromGroup_STORE(context, index) {
      context.commit('removeItemFromGroup_STORE', index);
    }
  },
});

export default store;
