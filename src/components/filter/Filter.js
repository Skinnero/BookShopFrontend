import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import "./Filter.css"
import {useEffect, useState} from "react";
import {getSupplier} from "../../api/Supplier"
import {getProductCategory} from "../../api/Category"
import {getFilteredProduct} from "../../api/Product";

const Filter = ({updateApiData}) => {

    const [suppliers, setSuppliers] = useState([])
    const [productCategories, setProductCategories] = useState([])
    const [formData, setFormData] = useState({
        supplierId: '',
        productCategoryId: ''
    })

    useEffect(() => {
        getSupplier().then(response => setSuppliers(response))
        getProductCategory().then(response => setProductCategories(response))
    }, []);

    const handleOnChange = (event) => {
        const checkboxes = document.querySelectorAll(`[name="${event.target.name}"]`)
        const {name, value} = event.target
        if (!event.target.checked) {
            setFormData({
                ...formData,
                [name]: ""
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
        checkboxes.forEach(checkbox => {
            if (event.target.checked) {
                checkboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== event.target) {
                        otherCheckbox.checked = false
                    }
                })
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getFilteredProduct(formData).then(response => updateApiData(response))
    }

    return (
        <div className={"filter"}>
            <Form onSubmit={handleSubmit}>
                <Form.Text>Supplier</Form.Text>
                <div className="mb-3">
                    {suppliers.map(supplier => (
                        <Form.Check
                            key={supplier.id}
                            type={"checkbox"}
                            label={supplier.name}
                            name={"supplierId"}
                            value={supplier.id}
                            onChange={handleOnChange}
                        />
                    ))}
                </div>
                <Form.Text>Category</Form.Text>
                <div className="mb-3 ">
                    {productCategories.map(category => (
                        <Form.Check
                            key={category.id}
                            type={"checkbox"}
                            label={category.name}
                            name={"productCategoryId"}
                            value={category.id}
                            onChange={handleOnChange}
                        />
                    ))}
                </div>
                <Button type={"submit"}>Filter</Button>
            </Form>
        </div>
    )
}

export default Filter