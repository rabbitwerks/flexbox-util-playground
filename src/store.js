import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    flexItemGroup: [
      {
        flex: 1,
        isCustomWidth: false,
        customWidth: 0,
        measurementUnits: 'px',
        customWidthFull: '',
        nested: {
          hasNestedFlexbox: false,
          nestedFlexGroup: [
            {
              flex: 1,
            },
          ],
          nestedFlexDirection: 'flexdir-row',
        },
      },
    ],
    flexGroupDirection: 'flexdir-row',
  },
  getters: {
    // gets entire flex-item-group
    getFlexGroup: state => state.flexItemGroup,
    // gets single flex item from group
    getFlexGroupItem: state => index => state.flexItemGroup[index],
    // gets current flex direction
    getFlexDirection: state => state.flexGroupDirection,
  },
  mutations: {
    // adds a new flex item to the flex group
    addItemToGroup_MUTA(state) {
      if (state.flexItemGroup.length > 4) return;
      state.flexItemGroup.push({
        flex: 1,
        isCustomWidth: false,
        customWidth: 0,
        measurementUnits: 'px',
        customWidthFull: '',
      });
    },
    // removes flex item from group, if index,
    // removes at the index, else removes last entry of group
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
    // sets the new flex direction
    setFlexDirection_MUTA(state, newDirection) {
      store.state.flexGroupDirection = newDirection;
    },
    // sets a flex amount to an individual flex item
    setFlexAmount_MUTA(state, flexItemData) {
      store.state.flexItemGroup[flexItemData.index].isCustomWidth = flexItemData.isCustomWidth;
      store.state.flexItemGroup[flexItemData.index].flex = flexItemData.value;
    },

    setFlexItemToCustomWidth_MUTA(state, payload) {
      store.state.flexItemGroup[payload.index]
        .isCustomWidth = payload.isCustomWidth;
    },
    setCustomWidthValue_MUTA(state, payload) {
      store.state.flexItemGroup[payload.index]
        .customWidth = payload.value;
    },
    setCustomWidthUnits_MUTA(state, payload) {
      store.state.flexItemGroup[payload.index]
        .measurementUnits = payload.value;
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

    setCustomWidth_STORE(context, payload) {
      context.commit('setFlexItemToCustomWidth_MUTA', payload);
      context.commit('setCustomWidthValue_MUTA', payload);
      context.commit('setCustomWidthUnits_MUTA', payload);
    },
    setCustomWidthUnits_STORE(context, payload) {
      context.commit('setCustomWidthUnits_MUTA', payload);
    },
  },
});

export default store;
