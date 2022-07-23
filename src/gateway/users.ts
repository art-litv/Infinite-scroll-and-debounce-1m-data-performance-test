import axios from "axios";

const baseUrl = "https://6151a12d4a5f22001701d31f.mockapi.io/botUsers";

export const getUsers = async () => axios.get(baseUrl);
