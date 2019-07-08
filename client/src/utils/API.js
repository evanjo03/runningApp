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
  addActivity: function(id) {
    return axios.put("/api/users/" + id + "/activities");
  },
  deleteActivity: function(userId, activityId) {
    return axios.delete("/api/users/" + userId + "/activities/" + activityId);
  }
};
