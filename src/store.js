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
    // gets entire flex-item-group
    getFlexGroup: state => state.flexItemGroup,
    getFlexGroupItem: state => index => state.flexItemGroup[index],
    getFlexDirection: state => state.flexGroupDirection,
  },
  mutations: {
    addItemToGroup_MUTA(state) {
      console.log('mutation');
      state.flexItemGroup.push({
        flex: 1, customWidth: '',
      });
    },
    removeItemFromGroup_MUTA(state, index) {
      if (state.flexItemGroup.length === 0) {
        console.log('no flex items in the group');
        return;
      }
      if (index) {
        state.flexItemGroup.splice(index, 1);
      } else {
        state.flexItemGroup.splice(state.flexItemGroup.length - 1, 1);
      }
    },
    setFlexDirection_MUTA(state, newDirection) {
      store.state.flexGroupDirection = newDirection;
      console.log('New Flex Direction: ', state.flexGroupDirection);
    },
    setFlexAmount_MUTA(state, flexItemData) {
      store.state.flexItemGroup[flexItemData.index].flex = flexItemData.value;
      console.log(`Flex Item ${flexItemData.index + 1} changed to: `, state.flexItemGroup[flexItemData.index].flex);
    },
  },
  actions: {
    addItemToGroup_STORE(context) {
      console.log('action');
      context.commit('addItemToGroup_MUTA');
    },
    removeItemFromGroup_STORE(context, index) {
      context.commit('removeItemFromGroup_MUTA', index);
    },
    setFlexDirection_STORE(context, newDirection) {
      context.commit('setFlexDirection_MUTA', newDirection);
    },
    setFlexAmount_STORE(context, flexItemData) {
      context.commit('setFlexAmount_MUTA', flexItemData);
      console.log('set flex amount action', flexItemData);
    },
  },
});

export default store;
