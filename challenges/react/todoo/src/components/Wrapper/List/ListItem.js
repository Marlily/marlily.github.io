import List from "./List"
import icon from '../../../assets/images/icon-cross.svg'
const ListItem = () => {  

    return(
        <li className="list-item">
            <button className="circle"></button>
            <p>Item</p>
            <button className="close">
                <img src={icon} alt="icon" />
            </button>
        </li>
    )
}

export default ListItem;