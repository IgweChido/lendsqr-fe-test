import { axiosBaseInstance } from ".";
export default async function deleteData(url: string, data?: any) {
  try {
    return await axiosBaseInstance.delete(url, data);
  } catch (error) {
    return error;
  }
}
