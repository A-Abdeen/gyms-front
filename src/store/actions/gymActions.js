import instance from "./instance";
import * as types from "./types";

export const fetchGym = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/gyms");
      dispatch({
        type: types.FETCH_GYM,
        payload: { gyms: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createGym = (newGym) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/gyms", newGym);
      dispatch({
        type: types.CREATE_GYM,
        payload: { newGym: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
