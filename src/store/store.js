/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import parentFlexGroupModule from './modules/ParentFlexGroup_STORE';
import nestedFlexGroupModule from './modules/NestedFlexGroup_STORE';
import moreOptionsModule from './modules/MoreOptions_STORE';
import customPixelSizeModule from './modules/CustomPixelSize_STORE';
import customFlexColorModule from './modules/CustomFlexColor_STORE';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    flexItemGroup: [
      {
        flex: 1,
        highlightActive: false,
        isCustomPixelSize: false,
        customColor: '',
        customPixelSize: 0,
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
    setCustomPixelSizeAs(state, { parentIndex, isCustomPixelSize }) {
      state.flexItemGroup[parentIndex].isCustomPixelSize = isCustomPixelSize;
    },
  },
  modules: {
    parentFlexGroupModule,
    nestedFlexGroupModule,
    moreOptionsModule,
    customPixelSizeModule,
    customFlexColorModule,
  },
});

export default store;
