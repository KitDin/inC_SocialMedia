import Api from "./Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  }
};

// AuthenticationService.register({
//   USER_AccountName: "esttt",
//   USER_Password: "145631"
// });
