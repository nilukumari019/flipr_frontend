import { authActions } from "../store";

export const login = (e) => {};

export const signup = async (formData, redirect, dispatch) => {
    console.log(formData);
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const response = await res.json();
        console.log(response);
        if (!response.success) {
            alert(response.error);
        } else {
            dispatch(
                authActions.login({
                    email: response.user.email,
                    name: response.user.name,
                })
            );
            const date = new Date();
            date.setDate(date.getDate() + 3 * 24 * 60 * 60);
            document.cookie = `jwt=${response.token};expires=${date.toUTCString};path=/;`;
            redirect("/");
        }
    } catch (err) {
        alert(err);
    }
};

export const logout = (dispatch) => {
    dispatch(authActions.logout());
};
