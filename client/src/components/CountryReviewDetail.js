import { useParams, Link } from "react-router-dom";
import "../App.css";

const CountryReviewDetail = (props) => {
  const { countryname } = useParams();

  const review = props.reviews.find((review) => review.country === countryname);
  console.log(review);

  if (review) {
    return (
      <div>
        <h3>{countryname} Reviews:</h3>
  
        <table>
          <thead>
            <tr>
              <th>Detail</th>
              <th>Experience of Racism</th>
              <th>Experience as a Woman</th>
              <th>LGBTQIA+ Acceptance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>{review.description}</p>
              </td>
              <td>{review.racism_experience}</td>
              <td>{review.lgbtqi_acceptance}</td>
              <td>{review.womens_safety}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>No reviews for this country yet</h1>
      </div>
    )
  }


}

export default CountryReviewDetail;
