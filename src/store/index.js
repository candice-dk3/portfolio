
import { createStore } from 'vuex'
export default createStore({
  state: {
    about: null,
    projects: null,
    education: null,
    skills: null,
  },
  getters: {
  },
  mutations: {
    setAbout(state,payload){
      state.about = payload
    },
    setProjects(state,payload){
      state.projects = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setSkills(state,payload){
      state.skills = payload
    }
  },
  actions: {
    async getData({commit}){
      let fetchedData = await fetch('https://candice-dk3.github.io/api/data/data.json')
      let data = await fetchedData.json()
      let {about, projects, education,skills, testimonials} = data
      commit('setAbout', about)
      commit('setProjects', projects)
      commit('setEducation', education)
      commit('setSkills', skills)
    }
  },
  modules: {
  }
})
