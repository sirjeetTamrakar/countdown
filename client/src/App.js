import React, {useState} from 'react'
import NavBar from './components/NavBar'
import Form from './components/FormPage'
import Card from './components/Card'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [ID, setID] =  useState(null)
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/'><Card ID={ID} setID={setID}/></Route>
                <Route path='/form'><Form ID={ID} setID={setID}/></Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App
