import getData from "../requests/getData";
export const getUserProfile = async (query: any) => {
  const respData = await getData(`/e5f7f2da-82fb-4cfa-b6ec-c370678bb3df`);
  return respData;
};
