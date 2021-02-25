import instance from "./instance";
import * as types from "./types";
import { toast } from "react-toastify";
export const fetchClass = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/classes");
      dispatch({
        type: types.FETCH_CLASS,
        payload: { classes: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchClassTypes = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/types");
      dispatch({
        type: types.FETCH_TYPES,
        payload: { types: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createClass = (newClass) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(
        `/gyms/${newClass.gymId}/classes`,
        newClass
      );
      dispatch({
        type: types.CREATE_CLASS,
        payload: { newClass: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const bookClass = (userId, classId) => {
  return async (dispatch) => {
    try {
      const res = await instance.put(`/classes/${classId}/book`, {
        userId,
      });
      dispatch({
        type: "UPDATE_CLASS",
        payload: { updatedClass: res.data },
      });
      toast.success("Successfully Booked", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cancelClass = (userId, classId) => {
  return async (dispatch) => {
    try {
      const res = await instance.put(`/classes/${classId}/cancel`, {
        userId,
      });
      dispatch({
        type: "UPDATE_CLASS",
        payload: { updatedClass: res.data },
      });
      toast.error("Booking cancelled !!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
