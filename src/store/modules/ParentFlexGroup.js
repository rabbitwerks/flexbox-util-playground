/* eslint-disable no-param-reassign */


const getters = {
  // gets entire flex-item-group
  getFlexGroup: state => state.flexItemGroup,
  // gets single flex item from group
  getFlexGroupItem: state => index => state.flexItemGroup[index],
  // gets current flex direction
  getFlexDirection: state => state.flexGroupDirection,
  // sets current flexgap
  getFlexgap: state => state.flexgap,
};

const mutations = {
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
  // removes flex item from last entry of group
  removeItemFromGroup_MUTA(state) {
    if (state.flexItemGroup.length === 0) {
      console.log('no flex items in the group');
      return;
    }
    state.flexItemGroup.pop();
  },
  // sets the new flex direction
  setFlexDirection_MUTA(state, newDirection) {
    state.flexGroupDirection = newDirection;
  },
  // sets a flex amount to an individual flex item
  setFlexAmount_MUTA(state, flexItemData) {
    state.flexItemGroup[flexItemData.index].isCustomWidth = flexItemData.isCustomWidth;
    state.flexItemGroup[flexItemData.index].flex = flexItemData.value;
  },

  // sets flexgap class for parent flex group
  // payload = flexgap classes[selected class index]
  setFlexgap_MUTA(state, payload) {
    state.flexgap = payload;
  },
};

const actions = {
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
  },

  setFlexgap_STORE(context, payload) {
    context.commit('setFlexgap_MUTA', payload);
  },
};

export default {
  getters,
  mutations,
  actions,
};
