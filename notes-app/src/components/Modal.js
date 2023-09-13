import { useEffect, useState } from 'react';


const Modal = (props) => {

    const [value, setValue] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const hideModal = (e) => {
        
        if (e.target.className == 'modal show') {
            props.setActive({
                ...props.active,
                show: false,
                edit: false
            })
        }
    }

    useEffect( () => {
        if(props.active.edit) {
            setValue( props.notes[props.active.item].text );
        } else {
            setValue( '' );
        }
    }, [props.active.edit]);

    
    const addNewNote = () => {
        props.setNotes([
            
            { 
                text: value, 
                color: selectedColor
            }, 

            ...props.notes,
        ]);

        props.setActive({
            ...props.active,
            show: false,
            edit: false
        });
        setValue('');
    }

    const editNote = () => {
        const tempNotes = [...props.notes];

        tempNotes[props.active.item ] = {
            text: value, color: selectedColor
        }

        props.setNotes(tempNotes)

        props.setActive({
            ...props.active,
            show: false,
            edit: false
        });
        setValue('');
    }


    return (
   
                <div 
                    className={`modal ${props.active.show ? 'show' : ''}`}
                    onClick={hideModal} 
                    initial={{ opacity: 0 }}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0 }}
                >
                    <div className="modal-inner">
                        <h2> {props.active.edit ? 'Edit your note' : 'Add new note'} </h2>
                        <ul>
                            <li className='bg1' onClick={() => { setSelectedColor('bg1') }} ></li>
                            <li className='bg2' onClick={() => { setSelectedColor('bg2') }}></li>
                            <li className='bg3' onClick={() => { setSelectedColor('bg3') }}></li>
                            <li className='bg4' onClick={() => { setSelectedColor('bg4') }}></li>
                            <li className='bg5' onClick={() => { setSelectedColor('bg5') }}></li>
                            <li className='bg6' onClick={() => { setSelectedColor('bg6') }}></li>
                        </ul>

                        <textarea className={selectedColor} name="text" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
                        <button className="btn-add" onClick={ props.active.edit ? editNote : addNewNote} style={ !props.active.edit ? {marginLeft: 'auto', marginRight: 'auto'} : {} } > {props.active.edit ? 'Save note' : 'Add note'} </button>

                    </div>
                </div>

    )
}

export default Modal;