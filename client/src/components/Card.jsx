import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCards } from '../actions/cards'
import Countdown from 'react-countdown';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loading from '../images/new.gif'
import '../styles/cards.css'
import {deleteCard} from '../actions/cards'

const Card = ({ID, setID}) => {
    const cards = useSelector((state) => state.cards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCards())
    },[dispatch, ID])
    
    const dateC= (da) => {
        const datea = new Date(da)
        const time = new Date(datea.setHours(0,0,0,0)).getTime() - new Date().getTime()
        return(time)
    }

    const Completionist = () => <span className='text-white'>Best Wishes. Good Health!</span>;
    const renderer = ({days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <>
                <div  className='main'><div className='s'> {days} </div> <div className='tiny'> Days </div></div>
                <div  className='main'><div className='s'> {hours} </div> <div className='tiny'> Hours </div></div>
                <div  className='main'><div className='s'> {minutes} </div> <div className='tiny'> Minutes </div></div>
                <div  className='main'><div className='s'> {seconds} </div> <div className='tiny'> Seconds </div></div>
            </>
        )
    }
    };
    return (
        <>
            {!cards.length ? <div className='box'> <img className='loading' src={loading} alt='loading' /></div> :
                (
                    cards.map((card) => (
                        <React.Fragment key={card._id}>
                            <div className='mx-auto cards' >
                                <div className='overflow'>
                                    <img src={card.file} className='imgCard' alt='File' />
                                </div>
                                <div className='cardDetails mx-auto'>
                                    <div className='date btn-danger'><Countdown date={Date.now() + dateC(card.dateOn)} renderer={renderer} /></div>
                                    <Alert variant='light' className='color'>
                                    <div className='d-flex justify-content-between'>
                                        <h1>{card.title}</h1>
                                        <h5>{ card.dateOn.slice(0,10)}</h5>
                                    </div>
                                    <div>Creator : {card.creator.toUpperCase()}</div>
                                    <h4 className='my-4'>{card.description}</h4>
                                    <div >
                                        <Link to='/form' className='btn but btn-danger' title='EDIT' onClick={() => setID(card._id)}>
                                            <i className="far fa-edit"></i>
                                        </Link>
                                        <button className='btn btn-primary but mx-2' title="DELETE" onClick={() => dispatch(deleteCard(card._id))}>
                                            <i className="far fa-trash-alt text-white"></i>
                                        </button>
                                        </div>
                                    </Alert>
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                )
            }
        </>
    )
}

export default Card
