import React from 'react';
import ReactDom from 'react-dom';
import io from 'socket.io-client';
import MessageForm from './formComponent.jsx';
import MessageList from './messageListComponent.jsx';

const socket = io();
socket.on('message', msg => chatBoxInstance.handleIncommingMessages(msg));

//React Components
const ChatBox = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  handleIncommingMessages: function(msg){
    var newData = (JSON.parse(JSON.stringify(this.state.data)));
    newData.push(msg);
    this.setState({data: newData});
  },
  handleOutCommingMessages: function(msg){
    socket.emit('message', msg);
  },
  render: function() {
    return (
      <div className="chatBox">
        <div className="chatName">
          <h2>Chat Room</h2>
        </div>
        <MessageList data={this.state.data}/>
        <MessageForm socket={this.handleOutCommingMessages}/>
      </div>
    );
  }
});

// React render
const chatBoxInstance = ReactDom.render(
  <ChatBox />,
  document.getElementById('app')
);
