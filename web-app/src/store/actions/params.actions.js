export const UPDATE_ZIPCODE = "[params] Update zipcode";
export const UPDATE_DAYS = "[params] Update days";

export const updateZipcode = zipcode => ({
    type: UPDATE_ZIPCODE,
    payload: zipcode
});

export const updateDays = days => ({
    type: UPDATE_DAYS,
    payload: days
});
