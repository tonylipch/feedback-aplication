import FeedbaackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'
import Spinner from './shared/Spinner'

const FeedbackList = () => {
    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading&&
        (!feedback|| feedback.length ===0)){
        return <p>no feedback</p>
    }

    return isLoading ? <Spinner />:  
        
    (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item)=>(
                    <motion.div 
                        key={item.id}
                        initial = {{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <FeedbaackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList