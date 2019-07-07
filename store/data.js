import { getEntities } from "~/utils/search";

export const state = () => ({
  entities: {}
});

export const mutations = {
  ADD_ENTITIES(state, entities = {}) {
    state.entities = {
      ...state.entities,
      ...entities
    };
  }
};

export const actions = {
  addEntitiesById({ commit }, ids = []) {
    getEntities(ids).then(response => {
      commit("ADD_ENTITIES", response.data.entities);
    });
  },
  addEntity({ commit }, entity = {}) {
    const entities = { [entity.id]: entity };
    commit("ADD_ENTITIES", entities);
  }
};
