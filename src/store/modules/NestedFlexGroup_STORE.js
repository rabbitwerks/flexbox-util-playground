/* eslint-disable no-param-reassign */

const getters = {
  getNestedFlexGroup: (state, getter, rootState) => index => rootState.flexItemGroup[index].nested,

  // gets nested flexdir of current flex item
  getNestedFlexDirection: (state, getter, rootState) => index => rootState.flexItemGroup[index]
    .nested.nestedFlexDirection,
};

const mutations = {
  // adds a nested flex item to the current parent flex item
  // payload === index
  addNestedItemtoFlexItem_MUTA(state, { rootState, parentIndex }) {
    rootState.flexItemGroup[parentIndex].isCustomWidth = false;
    if (!rootState.flexItemGroup[parentIndex].nested.nestedFlexGroup.length) {
      rootState.flexItemGroup[parentIndex].nested.hasNestedFlexbox = true;
    }
    if (rootState.flexItemGroup[parentIndex].nested.nestedFlexGroup.length > 3) {
      console.log('max nested flex items reached');
      return;
    }
    rootState.flexItemGroup[parentIndex].nested.nestedFlexGroup.push({
      flex: 1,
      customColor: '',
    });
  },

  // removes a nested flex item from the current parent flex item
  // payload === index
  removeNestedItemfromFlexItem_MUTA(state, { rootState, parentIndex }) {
    rootState.flexItemGroup[parentIndex].isCustomWidth = false;
    if (!rootState.flexItemGroup[parentIndex].nested.nestedFlexGroup.length) return;

    rootState.flexItemGroup[parentIndex].nested.nestedFlexGroup.pop();

    if (!rootState.flexItemGroup[parentIndex].nested.nestedFlexGroup.length) {
      rootState.flexItemGroup[parentIndex].nested.hasNestedFlexbox = false;
    }
  },

  // payload === index, newDirection
  setNestedFlexDirection_MUTA(state, { rootState, payload: { parentIndex, newDirection } }) {
    rootState.flexItemGroup[parentIndex].nested.nestedFlexDirection = newDirection;
  },
  // es6 destructuring is amazing :)
  setNestedFlexAmount_MUTA(state, {
    rootState, payload: { parentIndex, nestedIndex, newFlexAmount },
  }) {
    // eslint-disable-next-line
    rootState.flexItemGroup[parentIndex].nested.nestedFlexGroup[nestedIndex].flex = newFlexAmount;
  },

};

const actions = {

  // payload === parentIndex
  addNestedItemtoFlexItem_STORE({ commit, rootState }, payload) {
    const parentIndex = payload;
    commit('addNestedItemtoFlexItem_MUTA', { rootState, parentIndex });
  },

  // payload === parentIndex
  removeNestedItemfromFlexItem_STORE({ commit, rootState }, payload) {
    const parentIndex = payload;
    commit('removeNestedItemfromFlexItem_MUTA', { rootState, parentIndex });
  },

  // nested flexdir selection
  // payload === index, newDirection
  setNestedFlexDirection_STORE({ commit, rootState }, payload) {
    commit('setNestedFlexDirection_MUTA', { rootState, payload });
  },

  setNestedFlexAmount_STORE({ commit, rootState }, payload) {
    commit('setNestedFlexAmount_MUTA', { rootState, payload });
  },
};

export default {
  getters,
  mutations,
  actions,
};
