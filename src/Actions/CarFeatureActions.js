
export const ADD_CAR_FEATURE = "ADD_CAR_FEATURE";
export const REMOVE_CAR_FEATURE = "REMOVE_CAR_FEATURE";

export const addCarFeature = (feature) => {
    console.log("actions: addCarFeature")
    return { type: ADD_CAR_FEATURE, payload: feature }
}

export const removeCarFeature = (feature) => {
    return { type: REMOVE_CAR_FEATURE, payload: feature }
}