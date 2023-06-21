import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const Item = (props) => {

    const openEditModal = () => {
        props.setActive({show: true, edit: true, item: props.number});
    }

    return (
        <div className={`${props.item.color}`}>
            <p className='text'>{props.item.text}</p>
            <div className="btns">
                <button className='btn' onClick={ openEditModal }>
                    <FontAwesomeIcon icon={faPen} />
                </button>
            </div>
        </div>
    )
}

export default Item;