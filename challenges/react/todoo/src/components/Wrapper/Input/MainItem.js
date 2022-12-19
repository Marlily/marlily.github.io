import {useState} from 'react';
import Input from './Input'

const MainItem = (props) => {
    
    const [inputText, setInputText] = useState("przed");

    function setText() {

    }

    return (
        <div className="main-item list-item">
            <button className="circle"></button>
            <Input valueText={inputText}/>
        </div>
    )
}

export default MainItem;