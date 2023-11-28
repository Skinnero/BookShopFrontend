import axios from "axios";

export const getSupplier = () => {
    return axios.get("http://localhost:8080/api/v1/suppliers")
        .then(response => {
            if (response.status !== 200) {
                throw new Error("Network response was not ok")
            }
            return response.data
        })
        .catch(error => {
            console.error('Error fetching data: ', error)
            throw error
        })
}
