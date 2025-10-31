import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'
import axios from 'axios'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState('add'); 
  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState(null);

  const handleOpen = (mode, client) => {
    setClientData(client || null);
    setmodalMode(mode);
    setIsOpen(true);
  }

  const handleSubmit = async (newClientData) => {
    if (modalMode === 'add') {
      try {
        const response = await axios.post('http://localhost:3000/api/clients', newClientData);
        console.log('Client added:', response.data);
      }catch (error) {
        console.error('Error adding client:', error);
      }
      console.log('modal add...');
      
    }else {
      console.log('Editing item...');
      console.log('modal edit...');
      try {
        const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData);
        console.log('Client updated:', response.data);
      }catch (error) {
        console.error('Error updating client:', error);
      }
    }
  }

  return (
    <>
    <Navbar onOpen= {() => handleOpen('add')} onSearch={setSearchTerm}  />
    <TableList handleOpen={handleOpen} onSearch={searchTerm} />
    <ModalForm 
    isOpen={isOpen}
    onSubmit={handleSubmit}
    onClose = {() => 
    setIsOpen(false)}
    mode={modalMode} 
    clientData={clientData}
   />
    </>
  )
}

export default App
