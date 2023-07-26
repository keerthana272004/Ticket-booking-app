import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { BiChevronLeftCircle } from 'react-icons/bi';
import './feedback.css'
import { addFeedback } from './api1';
import RadioGroupRating from './reacation';
import Navbar from './nave';
const Feedback = () => {
    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({
      uname: '',
      uemail: '',
      answer: ''
    })
  
    const handleChange = (e) => {
      e.preventDefault();
      setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }
    const handleSubmit =  async(e) => {
      e.preventDefault();
  
      try {
        const res = await addFeedback(formdata);
        if (res.status === 200) {
          toast.success('Feedback Added Successfully !');
        }
      }
      catch (error) {
        console.log(error);
      }
  
    }
  
    const routeBack = () => {
      navigate(-1)
    }
    return (
      <div className='app'>
      <div >
        <Navbar/>
      </div>
        <div className='main'>
         
          <form className='form-1' onSubmit={handleSubmit}>
            <h3 className='ft1'>Feedback</h3>
            <input type="text" name="uname" id="uname" placeholder='Name' className='fi1' onChange={handleChange} required />
            <input type="email" name="uemail" id="uemail" placeholder='Email' className='data-input bg-secondary black' onChange={handleChange} required />
            <h5>Any Other Suggestions</h5>
            <input type='text' name='answer' id='answer' placeholder='Answer' className='fi2' onChange={handleChange} required/>
            <RadioGroupRating/>
            <br/>
            <button type="submit" className='fb1' >Submit</button>
  
          </form>
  
  
          <button onClick={routeBack} className='route-btn-1 bg-white'><BiChevronLeftCircle color="#25db00" /></button>
        </div>

        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 500,
          }}
        />
      
      </div>
    )
}

export default Feedback