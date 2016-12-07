import React from 'react';
import Message from './messageComponent.jsx';

const MessageList = React.createClass({
  componentDidUpdate: function(){
    let elem = document.getElementById('messageList');
    elem.scrollTop = elem.scrollHeight;
  },
  render: function() {
    var messages = this.props.data.map( msg => {
      return(
        <Message className="message" key={msg.id} author={msg.author}>
          {msg.text}
        </Message>
      );
    });
    return (
      <div className="messageList messageListLook row" id="messageList">
        {messages}
      </div>
    );
  }
});

export default MessageList;
