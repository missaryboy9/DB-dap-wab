const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  routerdata: state => state.setlogin.routerdata,
  loginflag: state => state.setlogin.loginflag,
  setrouter: state => state.setlogin.setrouter,
  projectname: state => state.user.projectname
};
export default getters;
