import axiosClient from "../config";

export function getAlluserApi() {
  return axiosClient.get("user/all");
}

export function addUserApi(user) {
  return axiosClient.post("/user/add", { ...user });
}

export function editUserApi(user) {
  return axiosClient.put(`/user/edit/${user._id}`, { ...user });
}

export function deleteUserApi(user) {
  return axiosClient.delete(`/user/delete/${user._id}`);
}
