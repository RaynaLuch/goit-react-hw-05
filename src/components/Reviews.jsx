import { getReviews } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Reviews() {
  const { id } = useParams();

  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const localGetReviews = async () => {
      const response = await getReviews(id);
      setReviews(
        response.data.results.map((review) => (
          <div>
            <h2> {review.author}</h2>
            <p>{review.content}</p>
          </div>
        ))
      );
    };
    localGetReviews();
  }, [id]);
  return <p>{reviews}</p>;
}
