import type { productType } from "../utils/type";

const productAPI = "http://localhost:8080/products";

export const productCategory = ["Fashion", "Gaming", "Electronics", "Kitchen"];

export const setDataInServer = async (body: productType) => {
    await fetch(productAPI, {
        method: "POST",
        body: JSON.stringify(body)
    });
}

export const fetchAll = async () => {
    const res = await fetch(productAPI);
    const allData = await res.json();

    return allData;
}

export const deleteProduct = async (id: string) => {
    await fetch(`${productAPI}/${id}`, {
        method: "DELETE"
    });
}