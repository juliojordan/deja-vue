export default {
  install(Vue, { state }) {
    const _state = { ...state };
    Object.freeze(_state);
    Vue.prototype.$dv = function () {
      return _state;
    };
  }
};
