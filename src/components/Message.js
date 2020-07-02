import React from 'react';

const Message = ({ children }) => (
  <article className="b-message message is-link">
    <div className="message-body">{children}</div>
  </article>
);

export default Message;
