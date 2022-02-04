import { connect } from 'react-redux';
import React from 'react';

const ReviewIndexItem = ({ author,review}) => {
  debugger;
  const { title, description,recommends } = review;
  const {lname,fname}= author
  
  return (
    {recommends = true ? (
    <div>
        <h1>{`${fname} ${lname[0]}. recommends this listing`}</h1>
        <p>{title}</p>
        <p>{description}</p>
    </div>
    ) :(
        <div>
          <h1>{`${fname} ${lname[0]}. does not recommend this listing`}</h1>
          <p>{title}</p>
          <p>{description}</p>
        </div>
    )
  
    });
};
// export default ReviewIndexItem;



const mSTP = (state,ownProps) => {
  debugger;
  return {
    author: state.entities.users[ownProps.authorId]
  };
};

export default connect (mSTP)(ReviewIndexItem)