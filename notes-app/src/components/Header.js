import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

    
    return (
        <header className="header">
            <div className="container">
                <h1>Notes</h1>
                <button type="button" className="btn" onClick={ props.openModal } >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>

        </header>
    )
}

export default Header;