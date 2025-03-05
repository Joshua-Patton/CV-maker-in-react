import { useState } from 'react';


export default function Form( {onFormSubmit} ) {
    const [formData, setFormData] = useState({
                                        name:'',
                                        email: '',
                                        pn: '',
                                        university: '',

                                    });
    const handleChange = (e) =>{
        setFormData({[e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
        console.log("form submitted")
        e.preventDefault();
        console.log(formData);
        setFormData(formData);
        onFormSubmit(formData);

    }
    function CustInput({name}){
        return <label>{name}
                <input 
                    type="text" 
                    name= {name} 
                    onChange={handleChange}
                />
            </label>
    }
    
    
    return <div className="form">
        <form onSubmit={handleSubmit}>
            <CustInput name="name"/>
            <CustInput name="email"/>
            <CustInput name="pn"/>
            <CustInput name="university"/>
            <input 
                    type="text" 
                    name= {name} 
                    onCh
                    />
            
            <button type='submit'>submit</button>
        </form>
    </div>
}