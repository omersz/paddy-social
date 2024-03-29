import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("auth/login", userCredential);
    console.log("res.data qweqwe", res.data);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem('user',JSON.stringify(res.data))
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
