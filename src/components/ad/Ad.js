import "./Ad.css"
import Image from "react-bootstrap/Image"
import Placeholder from "../../mockdata/dummy_placeholder.png"
const Ad = () => (
    <div className={"ad"}>
        <Image src={Placeholder} fluid="true" rounded="true"/>
    </div>
)
export default Ad