/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import parentFlexGroupModule from './modules/ParentFlexGroup_STORE';
import nestedFlexGroupModule from './modules/NestedFlexGroup_STORE';
import customFlexSizeModule from './modules/CustomFlexSize_STORE';
import customFlexColorModule from './modules/CustomFlexColor_STORE';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    flexItemGroup: [
      {
        flex: 1,
        highlightActive: false,
        isCustomFlexSize: false,
        customColor: '',
        customFlexSize: 0,
        measurementUnits: 'px',
        pixelWidth: 0,
        pixelHeight: 0,
        nested: {
          hasNestedFlexbox: false,
          nestedFlexGroup: [],
          nestedFlexDirection: 'flexdir-row',
        },
      },
    ],
    flexGroupDirection: 'flexdir-row',
    isFlexDirectionRow: true,
    flexgap: {
      name: 'Flexgap 0', class: 'flexgap-0',
    },
  },
  mutations: {
    setCustomFlexSizeAs(state, { parentIndex, isCustomFlexSize }) {
      console.log(isCustomFlexSize, parentIndex)
      state.flexItemGroup[parentIndex].isCustomFlexSize = isCustomFlexSize;
    },
  },
  modules: {
    parentFlexGroupModule,
    nestedFlexGroupModule,
    customFlexSizeModule,
    customFlexColorModule,
  },
});

export default store;
