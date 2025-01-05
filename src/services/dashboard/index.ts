import getData from "../requests/getData";
export const getDashboardAnalytics = async () => {
  const respData = await getData(`/a6a9d401-d097-41c4-bdc8-0f8be4a13535`);
  return respData;
};
