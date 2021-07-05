import React, {useState, useEffect} from "react";
import calendar from '../images/calendar.jpg'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import {createCard, editCard} from '../actions/cards'
import '../styles/form.css'

const FormPage = ({ID, setID}) => {
  const [data, setData] = useState({
    creator:'', title:'', description:'', file:'', dateOn:''
  })
  
  const dispatch = useDispatch()
  const card = useSelector((state) => ID ? state.cards.find((c) => c._id === ID) : null)
  
  useEffect(() => {
        if(card)
        setData(card)  
  },[card])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (ID) {
      dispatch(editCard(ID, data))
    }
    else {
      dispatch(createCard(data))
    }
    clear()
  }

  const clear = () => {
    setID(null)
    setData({
    creator:'', title:'', description:'', file:'', dateOn:''
    })
  }

  return (
    <>
    <div className='mx-auto form' >
      <div className='imgBg'><img src={calendar} className='imgForm' alt='Calendar'/></div>
        <form className='w mx-auto' onSubmit={handleSubmit}>
          <h2 className='head'>{ID? 'Edit Countdown': 'Create a Countdown' }</h2>
        <input type='text' placeholder='Creator Name' required  value={data.creator} onChange={(e) => setData({ ...data, creator: e.target.value })}/>
        <input type='text' placeholder='Title' required value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        <input type='text' placeholder='Description'  value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
        <input type='date' value={data.dateOn} required onChange={(e) => setData({ ...data, dateOn: e.target.value })} />
        <FileBase type="file" multiple={false} required  onDone={({ base64 }) => setData({ ...data, file: base64 })} />
        <div> 
            <button className='btn btn-danger submit' type='submit'>Submit</button>
            <button className='btn btn-primary submit' onClick={clear}>Clear</button>
        </div>    
      </form>
    </div>
    <div className='bg'/>
    </>
)}

export default FormPage;