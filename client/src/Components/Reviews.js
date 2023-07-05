import React, { useState, useEffect } from "react";

function Reviews(){
    const [reviews, setReviews] = useState([]);
    const [comment, setComment] = useState("");
    useEffect(() => {
        // Fetch reviews for the specific book from the database
        fetch(`/reviews`)
          .then((response) => response.json())
          .then((data) => {
            
            setReviews(data);
          })
          .catch((error) => {
            console.log("Error retrieving reviews", error);
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
                return fetch(`/reviews`);
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
    return(
       
        <h1>Reviews</h1>
       
    )
}

export default Reviews;