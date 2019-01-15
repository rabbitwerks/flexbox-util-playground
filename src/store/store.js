import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    flexItemGroup: [
      {
        flex: 1,
        customColor: '',
        isCustomWidth: false,
        customWidth: 0,
        measurementUnits: 'px',
        nested: {
          hasNestedFlexbox: false,
          nestedFlexGroup: [],
          nestedFlexDirection: 'flexdir-row',
        },
      },
    ],
    flexGroupDirection: 'flexdir-row',
    flexgap: {
      name: 'Flexgap 0', class: 'flexgap-0',
    },
  },
  getters: {
    // gets entire flex-item-group
    getFlexGroup: state => state.flexItemGroup,
    // gets single flex item from group
    getFlexGroupItem: state => index => state.flexItemGroup[index],
    getNestedFlexGroup: state => index => state.flexItemGroup[index].nested,
    // gets current flex direction
    getFlexDirection: state => state.flexGroupDirection,
    getFlexgap: state => state.flexgap,

    // gets nested flexdir of current flex item
    getNestedFlexDirection: state => index => state.flexItemGroup[index].nested.nestedFlexDirection,
  },
  mutations: {
    // adds a new flex item to the flex group
    addItemToGroup_MUTA(state) {
      if (state.flexItemGroup.length > 4) return;
      state.flexItemGroup.push({
        flex: 1,
        customColor: '',
        isCustomWidth: false,
        customWidth: 0,
        measurementUnits: 'px',
        nested: {
          hasNestedFlexbox: false,
          nestedFlexGroup: [],
          nestedFlexDirection: 'flexdir-row',
        },
      });
    },
    // removes flex item from group, if index,
    // removes at the index, else removes last entry of group
    removeItemFromGroup_MUTA(state) {
      if (state.flexItemGroup.length === 0) {
        console.log('no flex items in the group');
        return;
      }
      state.flexItemGroup.pop();
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
      store.state.flexItemGroup[payload.parentIndex]
        .isCustomWidth = payload.isCustomWidth;
    },
    setCustomWidthValue_MUTA(state, payload) {
      store.state.flexItemGroup[payload.parentIndex]
        .customWidth = payload.value;
    },
    setCustomWidthUnits_MUTA(state, payload) {
      store.state.flexItemGroup[payload.parentIndex]
        .measurementUnits = payload.value;
    },

    setFlexgap_MUTA(state, payload) {
      store.state.flexgap = payload;
    },

    // adds a nested flex item to the current parent flex item
    // payload === index
    addNestedItemtoFlexItem_MUTA(state, parentIndex) {
      store.state.flexItemGroup[parentIndex].isCustomWidth = false;
      if (!state.flexItemGroup[parentIndex].nested.nestedFlexGroup.length) {
        this.state.flexItemGroup[parentIndex].nested.hasNestedFlexbox = true;
      }
      if (state.flexItemGroup[parentIndex].nested.nestedFlexGroup.length > 3) {
        console.log('max nested flex items reached');
        return;
      }
      state.flexItemGroup[parentIndex].nested.nestedFlexGroup.push({
        flex: 1,
        customColor: '',
      });
    },

    // removes a nested flex item from the current parent flex item
    // payload === index
    removeNestedItemfromFlexItem_MUTA(state, parentIndex) {
      store.state.flexItemGroup[parentIndex].isCustomWidth = false;
      if (!state.flexItemGroup[parentIndex].nested.nestedFlexGroup.length) return;

      state.flexItemGroup[parentIndex].nested.nestedFlexGroup.pop();

      if (!state.flexItemGroup[parentIndex].nested.nestedFlexGroup.length) {
        this.state.flexItemGroup[parentIndex].nested.hasNestedFlexbox = false;
      }
    },

    // payload === index, newDirection
    setNestedFlexDirection_MUTA(state, { parentIndex, newDirection }) {
      // eslint-disable-next-line
      state.flexItemGroup[parentIndex].nested.nestedFlexDirection = newDirection;
    },
    // es6 destructuring is amazing :)
    setNestedFlexAmount_MUTA(state, { parentIndex, nestedIndex, newFlexAmount }) {
      // eslint-disable-next-line
      state.flexItemGroup[parentIndex].nested.nestedFlexGroup[nestedIndex].flex = newFlexAmount;
    },

    setNestedFlexColor_MUTA(state, { parentIndex, nestedIndex, newValue }) {
      // eslint-disable-next-line
      state.flexItemGroup[parentIndex].nested.nestedFlexGroup[nestedIndex].customColor = newValue;
    },

    setFlexParentColor_MUTA(state, { parentIndex, newValue }) {
      // eslint-disable-next-line
      state.flexItemGroup[parentIndex].customColor = newValue;
    },
  },

  // =================
  // VUEX ACTIONS
  // =================
  actions: {
    addItemToGroup_STORE(context) {
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

    setFlexgap_STORE(context, payload) {
      context.commit('setFlexgap_MUTA', payload);
    },

    // payload === index
    addNestedItemtoFlexItem_STORE(context, payload) {
      console.log(payload);
      context.commit('addNestedItemtoFlexItem_MUTA', payload);
    },

    // payload === index
    removeNestedItemfromFlexItem_STORE(context, payload) {
      context.commit('removeNestedItemfromFlexItem_MUTA', payload);
    },

    // nested flexdir selection
    // payload === index, newDirection
    setNestedFlexDirection_STORE({ commit }, payload) {
      commit('setNestedFlexDirection_MUTA', payload);
    },

    setNestedFlexAmount_STORE({ commit }, payload) {
      commit('setNestedFlexAmount_MUTA', payload);
    },

    setNestedFlexColor_STORE({ commit }, payload) {
      commit('setNestedFlexColor_MUTA', payload);
    },

    setFlexParentColor_STORE({ commit }, payload) {
      commit('setFlexParentColor_MUTA', payload);
    },
  },
});

export default store;
