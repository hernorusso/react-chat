import React from 'react';

const Message = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="messageAuthor">{this.props.author}</h2>
        <div className="commentText">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Message; 
