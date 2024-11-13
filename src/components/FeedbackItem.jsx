import React from 'react'

import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

const FeedbaackItem = ({item}) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>deleteFeedback(item.id)} className="close">
              <FaTimes color='#f25f41'/>
            </button>
            <button onClick={()=>editFeedback(item)} className="edit">
              <FaEdit />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
  )
}

FeedbaackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbaackItem