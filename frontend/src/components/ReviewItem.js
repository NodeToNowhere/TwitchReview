import React from "react";
import "../stylesheets/ReviewItem.css";

function ReviewItem({ user }) {
  return (
    <div className="item">
      <div className="item__detailsUser">
        <h5>{"username"}</h5>
      </div>
      <div className="item__detailsRating">
        <h5>{"rating"}</h5>
      </div>
      <div className="item__detailsReview">
        <h5>{"review"}</h5>
      </div>
    </div>
  );
}

export default ReviewItem;
