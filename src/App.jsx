import { useState } from 'react';
import './App.css'
import Form from './components/CustomForm'
import CV from './components/CV'


export default function App() {
    const [formData, setFormData] = useState({name:"josh"});
    
    let handleFormSubmit = (data) => {
        setFormData(data);
    }

    return <div className='app'>
        <Form onFormSubmit={handleFormSubmit}/>
        <CV data={formData}/>
    </div>
}