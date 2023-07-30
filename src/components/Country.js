const Country = async (set) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/country`);
        const response = await res.json();
        set(response);
    } catch (err) {
        console.log(err);
    }
};

export default Country;
