import React from 'react';
import { connect } from 'react-redux';

const ReviewIndexItem = ({ review}) => {
  debugger;
 
  const { title, description } = review;
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{description}</li>

      </ul>
    </div>
  );
};



const mSTP = (state) => {
  return {
    author: state.entities.users[state.entities.review.author_id]
  };
};

export default connect (mSTP)(ReviewIndexItem)