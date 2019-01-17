/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import parentFlexGroupModule from './modules/ParentFlexGroup_STORE';
import customWidthModule from './modules/CustomWidth_STORE';
import nestedFlexGroupModule from './modules/NestedFlexGroup_STORE';

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

  },
  mutations: {

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

    setNestedFlexColor_STORE({ commit }, payload) {
      commit('setNestedFlexColor_MUTA', payload);
    },

    setFlexParentColor_STORE({ commit }, payload) {
      commit('setFlexParentColor_MUTA', payload);
    },
  },
  modules: {
    parentFlexGroupModule,
    nestedFlexGroupModule,
    customWidthModule,
  },
});

export default store;
