import getData from "../requests/getData";
export const getUserProfile = async (id: string) => {
  const respData = await getData(`/${id}`);
  return respData;
};
