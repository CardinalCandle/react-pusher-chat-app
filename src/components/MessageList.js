import React, { Component } from 'react'
const DUMMY_DATA = [
    {
        senderId: "deez",
        text: "I got ligma"
    },
    {
        senderId: "david",
        text: "what's ligma ?"
    },
    {
        senderId: "sigmaChad",
        text: "ligma balls lmao gottem"
    }
]
export default class MessageList extends Component {
  render() {
    return (
      <div className='message-list'>
        {DUMMY_DATA.map((message, index) => {
            return (
                <div key={index} className='message'>
                    <div className='message-username'>{message.senderId} : </div>
                    <div className='message-text'>{message.text}</div>
                </div>
            )
        })}
      </div>
    )
  }
}
