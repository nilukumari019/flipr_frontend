import store, { authActions } from "../store";

export const login = async (setError, input, dispatch, redirect) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });
        const response = await res.json();

        if (response.success) {
            const date = new Date();
            date.setTime(date.getTime() + 3 * 24 * 60 * 60 * 1000);
            document.cookie = `jwt=${
                response.token
            };expires=${date.toUTCString()};path=/`;
            dispatch(authActions.login(response.user));
            redirect("/");
        } else {
            setError(response.error);
        }
    } catch (err) {
        console.log(err);
    }
};

export const signup = async (formData, redirect, dispatch, set) => {
    if (formData.password !== formData.confirmPassword) {
        set({
            name: "",
            phoneNumber: "",
            email: "",
            password: "password doesnot match",
        });
        return;
    }
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
            set(response.error);
        } else {
            dispatch(
                authActions.login({
                    email: response.user.email,
                    name: response.user.name,
                })
            );
            const date = new Date();
            date.setTime(date.getTime() + 3 * 24 * 60 * 60 * 1000);
            document.cookie = `jwt=${
                response.token
            };expires=${date.toUTCString()};path=/`;
            redirect("/");
        }
    } catch (err) {
        alert(err);
    }
};

export const logout = (dispatch) => {
    document.cookie = `jwt=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; `;
    dispatch(authActions.logout());
};

export const hotel = async (area, set) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/hotel`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ area }),
        });
        const response = await res.json();
        set(response);
    } catch (err) {
        console.log(err);
    }
};

export const hotelById = async (id, set) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/hotel/${id}`);
        const response = await res.json();
        set(response);
    } catch (err) {
        console.log(err);
    }
};

export const fav = async () => {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];
    try {
        await fetch(`${import.meta.env.VITE_BACKEND}/favorite`, {
            method: "POST",
            headers: {
                Authorization: `bearer ${cookie}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ favorite: store.getState().favorite }),
        });
    } catch (err) {
        console.log(err);
    }
};

export const booked = async () => {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];
    try {
        await fetch(`${import.meta.env.VITE_BACKEND}/book`, {
            method: "POST",
            headers: {
                Authorization: `bearer ${cookie}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ booked: store.getState().booked }),
        });
    } catch (err) {
        console.log(err);
    }
};

export const fill = async (setFav, setBook, set) => {
    const fav = store.getState().favorite;
    const book = store.getState().booked;
    try {
        fav.map(async (item) => {
            set(true);
            hotelById(item, (response) => setFav((t) => [...t, response]));
            set(false);
        });

        book.map(async (item) => {
            set(true);
            hotelById(item, (response) => setBook((t) => [...t, response]));
            set(false);
        });
    } catch (err) {
        console.log(err);
    }
};

export const paymentHandler = async (amount, redirect) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/payment/getkey`);
    const { key } = await res.json();
    const response = await fetch(`${import.meta.env.VITE_BACKEND}/payment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
    });

    const { order } = await response.json();
    const detail = store.getState();

    var options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: detail.name,
        image: detail.profileImage,
        order_id: order.id,
        show_coupons: true,
        handler: async function (response) {
            paymentVerificationHandler(response, redirect);
        },
        prefill: {
            name: detail.name,
            email: detail.email,
            contact: "9000090000",
        },
        theme: {
            color: "#121212",
        },
    };
    const razor = new window.Razorpay(options);
    razor.open();
};

const paymentVerificationHandler = async (response, redirect) => {
    const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/payment/verification`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
            }),
        }
    );
    const data = await res.json();
    if (data.success) {
        redirect(`/paymentsuccess?reference=${response.razorpay_payment_id}`);
        store.dispatch(authActions.removeCart());
    }
};
