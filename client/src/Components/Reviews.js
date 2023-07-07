import React, { useState, useEffect } from "react";
import "../Styles/review.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Loader state

  useEffect(() => {
    fetch("/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false); // Turn off loader when data is fetched
      })
      .catch((error) => {
        console.log("Error retrieving reviews", error);
        setIsLoading(false); // Turn off loader in case of error
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment !== "") {
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
      })
        .then((response) => {
          if (response.ok) {
            return fetch("/reviews");
          } else {
            throw new Error("Error submitting review to the API");
          }
        })
        .then(() => {
          setComment("");
        })
        .catch((error) => {
          console.error("Error submitting review to the API", error);
        });
    } else {
      alert("Please provide a comment to submit the review.");
    }
  };

  const handleDelete = (reviewId) => {
    fetch(`/reviews/${reviewId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return fetch("/reviews");
        } else {
          throw new Error("Error deleting review from the API");
        }
      })
      .then(() => {
        // Refresh the reviews after successful deletion
        setReviews([]);
      })
      .catch((error) => {
        console.error("Error deleting review from the API", error);
      });
  };

  return (
    <div className="reviews-container">
      <div className="review-form">
        <h2 className="title">Leave a review</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            rows={5}
            cols={50}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <button type="submit" >
            Submit
          </button>
        </form>
      </div>
      {isLoading ? ( // Conditional rendering based on loader state
        <div className="loader">Loading...</div> // Display the loader while fetching data
      ) : (
        <div className="review-list">
          <h2>Reviews</h2>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{review.comment}</p>
                <h4>{review.event.name}</h4>
                <button onClick={() => handleDelete(review.id)}>&#x1F5D1;</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Reviews;
