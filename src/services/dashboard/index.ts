import getData from "../requests/getData";
export const getDashboardAnalytics = async () => {
  const respData = await getData(`/379fe066-66e0-47d6-9cf8-5cc31c756cd8`);
  return respData;
};
