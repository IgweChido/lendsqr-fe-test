import getData from "../requests/getData";
export const getUsers = async (query: any) => {
  const respData = await getData(`/1fa320a0-9b02-424b-8a7c-0a849e26eaa3`);
  return respData;
};
