import getData from "../requests/getData";
export const getUsers = async () => {
  const respData = await getData(`/79444f63-379e-4c28-98f2-3ee25d2e29c2`);
  return respData;
};
