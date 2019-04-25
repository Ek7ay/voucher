const user = {
  state: {
    phoneno: '',
    code: '',
    batchs: [],
    sdate: '',
    edate: ''
  },

  mutations: {
    SET_PHONENO: (state, phoneno) => {
      state.phoneno = phoneno
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_BATCHS: (state, batchs) => {
      state.batchs = batchs
    },
    SET_SDATE: (state, sdate) => {
      state.sdate = sdate
    },
    SET_EDATE: (state, edate) => {
      state.edate = edate
    }
  },

  actions: {
    setPhoneno( { commit, state}, phoneno) {
      commit('SET_PHONENO', phoneno)
    },
    setCode( { commit, state}, code) {
      commit('SET_CODE', code)
    },
    setBatchs( { commit, state}, batchs) {
      commit('SET_BATCHS', batchs)
    },
    setSdate( { commit}, sdate) {
      commit('SET_SDATE', sdate)
    },
    setEdate( { commit}, edate) {
      commit('SET_EDATE', edate)
    }
  },
};

export default user
