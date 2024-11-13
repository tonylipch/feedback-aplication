import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'

const AboutPage = () => {
  return (
    <AnimatePresence>
        <motion.div 
                
                    initial = {{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                <Card>
                  <div className="about">
                    <h1>There is my project</h1>
                    <p>This project is React app where you can leave some feedbacks</p>
                    <p><Link to='/'>Back to Home</Link></p>
                 </div>
               </Card>
                </motion.div>
  
    </AnimatePresence>
  )
}

export default AboutPage