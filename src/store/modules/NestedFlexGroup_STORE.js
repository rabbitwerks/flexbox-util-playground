/* eslint-disable no-param-reassign */


// ==================
// GETTERS
// ==================
const getters = {
  getNestedFlexGroup: (state, getter, rootState) => index => rootState.flexItemGroup[index].nested,

  // gets nested flexdir of current flex item
  getNestedFlexDirection: (state, getter, rootState) => index => rootState.flexItemGroup[index]
    .nested.nestedFlexDirection,
};


// ==================
// MUTATIONS
// ==================
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
      highlightActive: false,
      flex: 1,
      customColor: '',
      pixelWidth: 0,
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
    rootState.flexItemGroup[parentIndex].nested.nestedFlexGroup[nestedIndex].flex = newFlexAmount;
  },

  highlightNestedItem_MUTA(state, {
    rootState, payload: { parentIndex, nestedIndex, setActive },
  }) {
    rootState.flexItemGroup[parentIndex].nested.nestedFlexGroup[nestedIndex]
      .highlightActive = setActive;
  },

  // eslint-disable-next-line max-len
  setNestedPixelValue_MUTA(state, { rootState, payload: { parentIndex, nestedIndex, pixelWidth } }) {
    rootState.flexItemGroup[parentIndex]
      .nested.nestedFlexGroup[nestedIndex].pixelWidth = pixelWidth;
  },
};


// ==================
// ACTIONS
// ==================
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

  highlightNestedItem_STORE({ commit, rootState }, payload) {
    commit('highlightNestedItem_MUTA', { rootState, payload });
  },

  setNestedPixelValue_STORE({ commit, rootState }, payload) {
    commit('setNestedPixelValue_MUTA', { rootState, payload });
  },
};

export default {
  getters,
  mutations,
  actions,
};
