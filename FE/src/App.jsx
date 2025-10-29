import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState('add'); 

  const handleOpen = (mode) => {
    setmodalMode(mode);
    setIsOpen(true);
  }

  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log('Adding new item...');
    }else if (modalMode === 'edit') {
      console.log('Editing item...');
    }
  }

  return (
    <>
    <Navbar onOpen= {() => handleOpen('add')} />
    <TableList handleOpen={handleOpen} />
    <ModalForm 
    isOpen={isOpen}
    onSubmit={handleSubmit}
    onClose = {() => 
    setIsOpen(false)}
    mode={modalMode} 
   />
    </>
  )
}

export default App
