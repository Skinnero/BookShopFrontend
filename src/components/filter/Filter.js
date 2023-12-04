import {useEffect, useState} from "react";
import {useApi} from "../../hook/UseApi";
import {CheckBoxRow, FilterCheckBox, FilterListContainer, FilterTitle} from "./Filter.styles";

const Filter = ({setProducts}) => {
    const {get} = useApi()
    const [suppliers, setSuppliers] = useState([])
    const [productCategories, setProductCategories] = useState([])
    const [formData, setFormData] = useState({
        supplierId: '',
        productCategoryId: ''
    })

    useEffect(() => {
        get("/api/v1/suppliers").then(resp => setSuppliers(resp))
        get("/api/v1/product-categories").then(resp => setProductCategories(resp))
    }, []);

    useEffect(() => {
        get("/api/v1/products", formData).then(resp => {
            setProducts(resp)
        })
    }, [formData]);

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

    return (
        <FilterListContainer>
            <FilterTitle>Supplier</FilterTitle>
            {suppliers.map((supplier, index) => (
                <FilterCheckBox key={supplier.id}>
                    <input
                        id={"supplier-" + index}
                        type="checkbox"
                        name={"supplierId"}
                        value={supplier.id}
                        onClick={handleOnChange}
                    />
                    <CheckBoxRow htmlFor={"supplier-" + index}>
                        <p>{supplier.name}</p>
                    </CheckBoxRow>
                </FilterCheckBox>
            ))}
            <FilterTitle>Category</FilterTitle>
            {productCategories.map((category, index) => (
                <FilterCheckBox key={category.id}>
                    <input
                        id={"category-" + index}
                        type="checkbox"
                        name={"productCategoryId"}
                        value={category.id}
                        onChange={handleOnChange}
                    />
                    <CheckBoxRow htmlFor={"category-" + index}>
                        <p>{category.name}</p>
                    </CheckBoxRow>
                </FilterCheckBox>
            ))}
        </FilterListContainer>
    )
}

export default Filter