import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Item from './components/Item';
import Modal from './components/Modal';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

function App() {

  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState({
    show: false,
    edit: false,
    item: -1
  });

  const openModal = () => {
    if (!modal.show) {
      setModal({
        ...modal,
        show: true
      })
    } else {
      setModal({
        ...modal,
        show: false
      })
    }
  }

  return (
    <>
      <Header active={modal} setActive={setModal} openModal={openModal} />

      <section>
        <ul className='container items'>
            <AnimatePresence initial={false}>
              {notes.map((note, index) => (
                  <motion.li
                    className='item'
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                <Item key={index} number={index} item={note} openModal={openModal} active={modal} setActive={setModal} notes={notes} setNotes={setNotes}/>
                </motion.li>
              ))}
            </AnimatePresence>
        </ul>
      </section>

      <Modal active={modal} setActive={setModal} notes={notes} setNotes={setNotes}  />
    </>
  );
}

export default App;
