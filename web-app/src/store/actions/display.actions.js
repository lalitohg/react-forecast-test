export const FORECAST_ITEMS_UPDATED = '[display] Forecast items updated';
export const UPDATE_LOADING = '[display] Loading';

export const forecastItemsUpdated = forecastItems => ({
    type: FORECAST_ITEMS_UPDATED,
    payload: forecastItems
});

export const updateLoading = loading => ({
    type: UPDATE_LOADING,
    payload: loading
});
