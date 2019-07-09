import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(username) {
    return axios.get("/api/users/" + username);
  },
  createUser: function(user) {
    return axios.post("/api/users/", user)
  },
  addRun: function(username, run) {
    return axios.put("/api/users/" + username + "/activities", run);
  },
  deleteActivity: function(userId, activityId) {
    return axios.delete("/api/users/" + userId + "/activities/" + activityId);
  }
};
