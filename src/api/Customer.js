import axios from "axios";

export const getCustomerById = (id) => {
    return axios.get("http://localhost:8080/api/v1/customers/" + id, {
        withCredentials: true
    })
        .then(response => {
            console.log(response)
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