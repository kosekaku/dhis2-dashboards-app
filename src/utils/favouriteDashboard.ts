// Store starred dashboard in local storage
const storeFavourite = (dashboardId: string, isFavourite: boolean) => {
  return localStorage.setItem(dashboardId, String(isFavourite));
};

// Get starred dashboard from local storage
const getFavourite = (dashboardId: string) => {
  return localStorage.getItem(dashboardId);
};

export { storeFavourite, getFavourite };
