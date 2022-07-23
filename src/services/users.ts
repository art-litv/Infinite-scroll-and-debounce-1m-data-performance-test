import * as UsersGateway from "../gateway/users";

export const getUsers = async () => {
  const { data } = await UsersGateway.getUsers();
  return data;
};
