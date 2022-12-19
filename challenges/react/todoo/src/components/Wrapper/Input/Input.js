

const Input = (props) => {

  

    const handleKeyDown = e => {

        
        
        console.log(props.valueText);

        if ( e.key == 'Enter') {
            console.log(props.valueText);
            props.valueText = e.target.valueText;
            
        }
    }

    return(
        <input 
            type="text" 
            name="current" 
            placeholder="What to do..." 
            onKeyDown={handleKeyDown}
            />
    )
}

export default Input; 