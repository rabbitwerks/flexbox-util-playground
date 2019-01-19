/* eslint-disable no-param-reassign */

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

const mutations = {
  // adds a new flex item to the flex group
  addItemToGroup_MUTA(state, rootState) {
    console.log(rootState);
    if (rootState.flexItemGroup.length > 4) return;
    rootState.flexItemGroup.push({
      flex: 1,
      customColor: '',
      isCustomWidth: false,
      customWidth: 0,
      measurementUnits: 'px',
      highlightActive: false,
      nested: {
        hasNestedFlexbox: false,
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
  // sets the new flex direction
  setFlexDirection_MUTA(state, { rootState, newDirection }) {
    rootState.flexGroupDirection = newDirection;
  },
  // sets a flex amount to an individual flex item
  setFlexAmount_MUTA(state, { rootState, flexItemData }) {
    rootState.flexItemGroup[flexItemData.index].isCustomWidth = flexItemData.isCustomWidth;
    rootState.flexItemGroup[flexItemData.index].flex = flexItemData.value;
  },

  // sets flexgap class for parent flex group
  // payload = flexgap classes[selected class index]
  setFlexgap_MUTA(state, { rootState, payload }) {
    rootState.flexgap = payload;
  },
};

const actions = {
  addItemToGroup_STORE({ commit, rootState }) {
    commit('addItemToGroup_MUTA', rootState);
  },
  removeItemFromGroup_STORE({ commit, rootState }) {
    commit('removeItemFromGroup_MUTA', rootState);
  },

  setFlexDirection_STORE({ commit, rootState }, newDirection) {
    commit('setFlexDirection_MUTA', { rootState, newDirection });
  },

  setFlexAmount_STORE({ commit, rootState }, flexItemData) {
    commit('setFlexAmount_MUTA', { rootState, flexItemData });
  },

  setFlexgap_STORE({ commit, rootState }, payload) {
    commit('setFlexgap_MUTA', { rootState, payload });
  },

  activateHighlightParent_STORE({ commit, rootState }, payload) {
    
  },
};

export default {
  getters,
  mutations,
  actions,
};
