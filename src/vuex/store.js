import Vue from "vue";
import Vuex from "vuex";
import {differenceBy} from 'lodash';
import skillService from '@/services/skill.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signedInUser: null,
    skills: [],
  },
  mutations: {
    signInUser(state, user) {
      state.signedInUser = user;
    },
    setSkills(state, skills) {
      state.skills = skills;
    }
  },
  actions: {
    fetchSkills({commit}) {
      skillService.fetchSkills().then((skills) => {
        commit('setSkills', skills.filter(x => x.name).map(x => x.name));
      });
    },
    createAndUpdateSkills({state, dispatch}, skills) {
      const skillsToAdd = differenceBy(skills, state.skills, x => x.toLowerCase());

      if (!skillsToAdd.length) return;

      // TODO: Create end point for bulk adding skills
      const promises = skillsToAdd.map(skillService.addSkill);
      Promise.all(promises).finally(x => {
        dispatch('fetchSkills');
      })
    }
  }
});
