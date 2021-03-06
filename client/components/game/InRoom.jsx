import React from 'react'
import {connect} from 'react-redux'

import VoteButtons from './VoteButtons'
import VoteDisplay from './VoteDisplay'
import ChangeName from './ChangeName'

function InRoom ({room}) {
  return <div>
    <h3 className="subtitle is-2">Room: {room.name}</h3>
    <VoteDisplay />
    <ChangeName />
    <VoteButtons />
  </div>
}

const mapStateToProps = ({room}) => ({room})

export default connect(mapStateToProps)(InRoom)
