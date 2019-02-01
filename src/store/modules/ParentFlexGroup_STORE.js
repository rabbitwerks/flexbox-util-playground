/* eslint-disable no-param-reassign */


// ==================
// GETTERS
// ==================
const getters = {
  // gets entire flex-item-group
  getFlexGroup: (state, getter, rootState) => rootState.flexItemGroup,
  // gets single flex item from group
  getFlexGroupItem: (state, getter, rootState) => index => rootState.flexItemGroup[index],
  // gets current flex direction
  getFlexDirection: (state, getter, rootState) => rootState.flexGroupDirection,
  // sets current flexgap
  getFlexgap: (state, getter, rootState) => rootState.flexgap,

};


// ==================
// MUTATIONS
// ==================
const mutations = {
  // adds a new flex item to the flex group
  addItemToGroup_MUTA(state, rootState) {
    // console.log(rootState);
    if (rootState.flexItemGroup.length > 4) return;
    rootState.flexItemGroup.push({
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
        nestedFlexMargin: true,
        nestedFlexGroup: [],
        nestedFlexDirection: 'flexdir-row',
      },
    });
  },
  // removes flex item from last entry of group
  removeItemFromGroup_MUTA(state, rootState) {
    if (rootState.flexItemGroup.length === 0) {
      console.log('no flex items in the group');
      return;
    }
    rootState.flexItemGroup.pop();
  },

  // removes self from flex item group
  removeSelf_MUTA(state, { rootState, parentIndex }) {
    rootState.flexItemGroup.splice(parentIndex, 1);
  },

  // sets the new flex direction
  setFlexDirection_MUTA(state, { rootState, newDirection }) {
    rootState.flexGroupDirection = newDirection;
  },

  increaseFlexAmount_MUTA(state, { rootState, payload: { parentIndex } }) {
    if (rootState.flexItemGroup[parentIndex].flex < 20) {
      rootState.flexItemGroup[parentIndex].flex += 1;
      return;
    }
    console.log('max flex amount reached');
  },

  decreaseFlexAmount_MUTA(state, { rootState, payload: { parentIndex } }) {
    if (rootState.flexItemGroup[parentIndex].flex > 1) {
      rootState.flexItemGroup[parentIndex].flex -= 1;
      return;
    }
    console.log('minimum flex reached');
  },

  // sets a flex amount to an individual flex item
  setFlexAmount_MUTA(state, {
    rootState, payload: { parentIndex, newFlexAmount },
  }) {
    rootState.flexItemGroup[parentIndex].flex = newFlexAmount;
  },

  // sets flexgap class for parent flex group
  // payload = flexgap classes[selected class index]
  setFlexgap_MUTA(state, { rootState, payload }) {
    rootState.flexgap = payload;
  },

  // activates/deactivates highlight component on mouse hover
  hightlightParentItem_MUTA(state, { rootState, payload: { parentIndex, setActive } }) {
    rootState.flexItemGroup[parentIndex].highlightActive = setActive;
  },

  setPixelWidth_MUTA(state, { rootState, payload: { parentIndex, pixelWidth } }) {
    rootState.flexItemGroup[parentIndex].pixelWidth = pixelWidth;
  },

  setPixelHeight_MUTA(state, { rootState, payload: { parentIndex, pixelHeight } }) {
    rootState.flexItemGroup[parentIndex].pixelHeight = pixelHeight;
  },
};


// ==================
// ACTIONS
// ==================
const actions = {
  addItemToGroup_STORE({ commit, rootState }) {
    commit('addItemToGroup_MUTA', rootState);
  },
  removeItemFromGroup_STORE({ commit, rootState }) {
    commit('removeItemFromGroup_MUTA', rootState);
  },

  removeSelf_STORE({ commit, rootState }, payload) {
    const parentIndex = payload;
    commit('removeSelf_MUTA', { rootState, parentIndex });
  },

  setFlexDirection_STORE({ commit, rootState }, newDirection) {
    commit('setFlexDirection_MUTA', { rootState, newDirection });
  },

  increaseFlexAmount_STORE({ commit, rootState }, payload) {
    commit('setCustomPixelSizeAs', payload, { root: true });
    commit('increaseFlexAmount_MUTA', { rootState, payload });
  },

  decreaseFlexAmount_STORE({ commit, rootState }, payload) {
    commit('setCustomPixelSizeAs', payload, { root: true });
    commit('decreaseFlexAmount_MUTA', { rootState, payload });
  },

  setFlexAmount_STORE({ commit, rootState }, payload) {
    commit('setCustomPixelSizeAs', payload, { root: true });
    commit('setFlexAmount_MUTA', { rootState, payload });
  },

  setFlexgap_STORE({ commit, rootState }, payload) {
    commit('setFlexgap_MUTA', { rootState, payload });
  },

  highlightParentItem_STORE({ commit, rootState }, payload) {
    commit('hightlightParentItem_MUTA', { rootState, payload });
  },

  setPixelWidth_STORE({ commit, rootState }, payload) {
    commit('setPixelWidth_MUTA', { rootState, payload });
  },

  setPixelHeight_STORE({ commit, rootState }, payload) {
    commit('setPixelHeight_MUTA', { rootState, payload });
  },
};

export default {
  getters,
  mutations,
  actions,
};
