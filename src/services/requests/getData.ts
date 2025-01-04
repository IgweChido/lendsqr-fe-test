import { axiosBaseInstance } from ".";
import config from "./config";

export default async function getData(url: string) {
  try {
    const resp = await axiosBaseInstance.get(url);
    console.log("get config", config);
    return resp.data;
  } catch (error) {
    return error;
  }
}
