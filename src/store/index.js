
import { createStore } from 'vuex'
export default createStore({
  state: {
    about: null,
    projects: null,
    education: null,
    skills: null,
    softSkills: null,
    workExperience: null
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
    },
    setSoftSkills(state,payload){
      state.softSkills = payload
    },
    setWorkExperience(state,payload){
      state.workExperience = payload
    }
  },
  actions: {
    async getData({commit}){
      let fetchedData = await fetch('https://candice-dk3.github.io/api/data/data.json')
      let data = await fetchedData.json()
      let {about, projects, education,skills, softSkills, workExperience} = data
      commit('setAbout', about)
      commit('setProjects', projects)
      commit('setEducation', education)
      commit('setSkills', skills)
      commit('setSoftSkills', softSkills)
      commit('setWorkExperience', workExperience)
    }
  },
  modules: {
  }
})
