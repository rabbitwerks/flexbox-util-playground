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
        measurementUnits: '',
      },
    ],
    flexGroupDirection: 'flexdir-row',
    flexWrapActivated: false,
  },
  getters: {
    // gets entire flex-item-group
    getFlexGroup: state => state.flexItemGroup,
    // gets single flex item from group
    getFlexGroupItem: state => index => state.flexItemGroup[index],
    // gets current flex direction
    getFlexDirection: state => state.flexGroupDirection,
    getFlexWrapState: state => state.flexWrapActivated,
  },
  mutations: {
    // adds a new flex item to the flex group
    addItemToGroup_MUTA(state) {
      console.log('mutation');
      state.flexItemGroup.push({
        flex: 1, customWidth: '',
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
      console.log('New Flex Direction: ', state.flexGroupDirection);
    },
    // sets a flex amount to an individual flex item
    setFlexAmount_MUTA(state, flexItemData) {
      store.state.flexItemGroup[flexItemData.index].flex = flexItemData.value;
      console.log(`Flex Item ${flexItemData.index + 1} changed to: `, state.flexItemGroup[flexItemData.index].flex);
    },

    setFlexItemToCustomWidth_MUTA(state, customWidthData) {
      store.state.flexItemGroup[customWidthData.index]
        .isCustomWidth = customWidthData.isCustomWidth;
      // log the boolean value of custom width
      console.log('isCustomWidth: ', state.flexItemGroup[customWidthData.index].isCustomWidth);
    },
    setCustomWidthValue_MUTA(state, customWidthData) {
      store.state.flexItemGroup[customWidthData.index]
        .customWidth = customWidthData.customWidth;
      console.log('Custom Width set to: ', state.flexItemGroup[customWidthData.index].customWidth);
    },
    setCustomWidthUnits_MUTA(state, customWidthData) {
      store.state.flexItemGroup[customWidthData.index]
        .measurementUnits = customWidthData.measurementUnits;
    },
    switchFlexWrapON_MUTA(state) {
      store.state.flexWrapActivated = true;
      console.log('flexwrap: ', state.flexWrapActivated);
    },
    switchFlexWrapOFF_MUTA(state) {
      store.state.flexWrapActivated = false;
      console.log('flexwrap: ', state.flexWrapActivated);
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
    setCustomWidth_STORE(context, customWidthData) {
      context.commit('setFlexItemToCustomWidth_MUTA', customWidthData);
      context.commit('setCustomWidthValue_MUTA', customWidthData);
      context.commit('setCustomWidthUnits_MUTA', customWidthData);
    },
    setCustomWidthUnits_STORE(context, customWidthData) {
      context.commit('setCustomWidthUnits_MUTA', customWidthData);
    },
    switchFlexWrapON_STORE(context) {
      context.commit('switchFlexWrapON_MUTA');
    },
    switchFlexWrapOFF_STORE(context) {
      context.commit('switchFlexWrapOFF_MUTA');
    },
  },
});

export default store;
