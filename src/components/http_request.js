import { authActions } from "../store";
export const login = (e) => {};
export const signup = (redirect, dispatch) => {
    dispatch(
        authActions.login({ email: "21bcs107@gmail.com", name: "piyush" })
    );
    redirect("/");
};

export const logout = (dispatch) => {
    dispatch(authActions.logout());
};
