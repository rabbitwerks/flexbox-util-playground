/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import parentFlexGroupModule from './modules/ParentFlexGroup_STORE';
import nestedFlexGroupModule from './modules/NestedFlexGroup_STORE';
import customWidthModule from './modules/CustomWidth_STORE';
import customFlexColorModule from './modules/CustomFlexColor_STORE';

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
  modules: {
    parentFlexGroupModule,
    nestedFlexGroupModule,
    customWidthModule,
    customFlexColorModule,
  },
});

export default store;
