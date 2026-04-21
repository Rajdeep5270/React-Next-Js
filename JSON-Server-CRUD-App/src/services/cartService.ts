import type { productType } from "../utils/type";
const cartAPI = "http://localhost:8080/cart/";

export const setDataInCart = async (body: productType) => {
    const res = await fetch(cartAPI, {
        method: "POST",
        body: JSON.stringify(body)
    });

    return res.ok;
}

export const fetchAll = async () => {
    const res = await fetch(cartAPI);
    const allData = await res.json();

    return allData;
}

export const deleteCart = async (id: string) => {
    const res = await fetch(cartAPI + id, {
        method: "DELETE"
    });
}