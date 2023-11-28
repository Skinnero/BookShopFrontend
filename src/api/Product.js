import axios from "axios";

export const getProduct = () => {
    return axios.get("http://localhost:8080/api/v1/products", {
        withCredentials: true
    })
        .then(response => {
            if (response.status !== 200) {
                throw new Error("Network response was not ok")
            }
            return response.data
        })
        .catch(error => {
            console.error("Error fetching data: ", error)
            throw error
        })
}

export const getFilteredProduct = (formData) => {
    return axios.get(`http://localhost:8080/api/v1/products`, {
        params: {
            supplierId: formData.supplierId,
            productCategoryId: formData.productCategoryId
        },
        withCredentials: true
    })
        .then(response => {
            if (response.status !== 200) {
                throw new Error("Network response was not ok")
            }
            return response.data
        })
        .catch(error => {
            console.error("Error fetching data: ", error)
            throw error
        })
}