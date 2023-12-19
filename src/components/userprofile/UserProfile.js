import {UserProfileDetailsPanel, UserProfileDisplay, UserProfileOrderPanel} from "./UserProfile.styles";
import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/UserContext";
import Header from "../header/Header";
import {useApi} from "../../hook/UseApi";

const UserProfile = () => {
    const {user} = useContext(UserContext)
    const {get} = useApi()
    const [isShowingAddress, setIsShowingAddress] = useState(false)
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        email: '',
        city: '',
        zipCode: '',
        street: '',
        additionalInformation: ''
    })

    useEffect(() => {
        if (user.id) {
            get("/api/v1/customers/" + user.id)
                .then(resp => {
                    setCustomerDetails({
                        ...customerDetails,
                        name: resp.name,
                        email: resp.email
                    })
                })
        }
    }, [user]);

    const showAddress = () => {
        if (user.id) {
            get("/api/v1/addresses", {customerId: user.id})
                .then(resp => {
                    setCustomerDetails({
                        ...customerDetails,
                        city: resp.city,
                        zipCode: resp.zipCode,
                        street: resp.street + ' ' + resp.streetNumber,
                        additionalInformation: resp.additionalInformation
                    })
                })
        }
        setIsShowingAddress(!isShowingAddress)
    }

    const updateAddress = () => {

    }


    return (
        <>
            <Header/>
            <UserProfileDisplay>
                <UserProfileDetailsPanel>
                    <p>Name: {customerDetails.name}</p>
                    <p>Email: {customerDetails.email}</p>
                    {isShowingAddress ? (
                        <>
                            <button onClick={showAddress}>Hide Address</button>
                            <p>City: {customerDetails?.city}</p>
                            <p>Zip-Code: {customerDetails?.zipCode}</p>
                            <p>Street: {customerDetails?.street}</p>
                            <p>Additional Information: {customerDetails?.additionalInformation}</p>
                        </>
                    ) : (
                        <>
                            {/*<button onClick={showAddress}>Show Address</button>*/}
                        </>
                    )}
                    <button onClick={updateAddress}>Update Address</button>
                    <button>Delete Account</button>
                </UserProfileDetailsPanel>
                <UserProfileOrderPanel>
                    <table>
                        <tbody>
                        <tr>
                            <th>
                                Order_Id
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Basket
                            </th>
                        </tr>
                        <tr>
                            <td>88a78414-3836-44f8-a93c-2cc7d60c2e2d</td>
                            <td>2022-12-10 16:50</td>
                            <td>12300</td>
                            <th>
                                <button>Show Order</button>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                </UserProfileOrderPanel>
            </UserProfileDisplay>
        </>
    )
}

export default UserProfile