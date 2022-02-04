import React from 'react';

const ReviewIndexItem = ({ review}) => {
  debugger;
 console.log(review)
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
export default ReviewIndexItem;



// const mSTP = (state) => {
//   debugger;
//   return {
//     author: state.entities.users[state.entities.review.author_id]
//   };
// };

// export default connect (mSTP)(ReviewIndexItem)