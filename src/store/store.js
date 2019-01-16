/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import parentFlexGroupModule from './modules/ParentFlexGroup';

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
    getNestedFlexGroup: state => index => state.flexItemGroup[index].nested,

    // gets nested flexdir of current flex item
    getNestedFlexDirection: state => index => state.flexItemGroup[index].nested.nestedFlexDirection,
  },
  mutations: {
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

    setCustomWidth_STORE(context, payload) {
      context.commit('setFlexItemToCustomWidth_MUTA', payload);
      context.commit('setCustomWidthValue_MUTA', payload);
      context.commit('setCustomWidthUnits_MUTA', payload);
    },
    setCustomWidthUnits_STORE(context, payload) {
      context.commit('setCustomWidthUnits_MUTA', payload);
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
  modules: {
    parentFlexGroupModule,
  },
});

export default store;
