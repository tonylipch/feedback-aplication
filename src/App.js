import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './components/context/FeedbackContext'



function App(){
    return (
        <FeedbackProvider>
            <Router>
                <Header text={'Feedbacks'} />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>}>
                        </Route>
                        <Route path='/about' element={<AboutPage/>}/>
                    
                    </Routes>
                    <AboutIconLink/>
                </div>
        
            </Router>
        </FeedbackProvider>
    )
}

export default App

