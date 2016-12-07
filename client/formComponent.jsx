import React from 'react';

const MessageForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    var id = Date.now();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    this.props.socket({
      author: author,
      text: text,
      id: id
    });
    this.setState({text: ''});
  },
  render: function() {
    return (
      <div className="row formLook">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="author" className="col-sm-1 control-label">Name</label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="Your name"
                value={this.state.author}
                onChange={this.handleAuthorChange}
                />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="text" className="col-sm-1 control-label">Message</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Say something..."
                value={this.state.text}
                onChange={this.handleTextChange}
                />
            </div>
            <div className="col-sm-1">
              <input type="submit" className="btn btn-default" value="Send!" />
            </div>
          </div>
        </form>
      </div>
    );
  }
});

export default MessageForm;
