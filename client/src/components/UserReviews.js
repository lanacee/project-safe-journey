import { useState } from 'react'
import { Link } from 'react-router-dom'

const ReviewRow = (props) => {
  const { review, handleDelete } = props
  const handleClick = (event) => {
    handleDelete(review._id)
  }
  return (
    <tr>
      <td><Link to={"/countries/" + review.country}>{review.country}</Link></td>
      <td>
        {review.description}
      </td>
      <td>{review.racism_experience}</td>
      <td>{review.lgbtqi_acceptance}</td>
      <td>{review.womens_safety}</td>
      <td>
        <Link to={"/my-reviews/edit/" + review._id}><button>Edit</button></Link>
      </td>
      <td>
        <button onClick={handleClick}>Delete</button>
      </td>
    </tr>
  )
}

const CreateForm = (props) => {
  const [name, setName] = useState('')
  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={handleChange}
        name="name"
        placeholder="Review name"
      />
      <button>Create New Review</button>
    </form>
  )
}

const Reviews = (props) => {
  console.log(props);
  const reviewsRows = props.reviews.filter((review) => {
    return review.user_id === props.user.id
  }).map((review) => {
    return (
      <ReviewRow
        key={review._id}
        review={review}
        handleDelete={props.handleDelete}
      />
    )
  })

  return (
    <>
      <h1>Reviews</h1>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Detail</th>
            <th>Experience of Racism</th>
            <th>Experience as a Woman</th>
            <th>LGBTQIA+ Acceptance</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {reviewsRows}
        </tbody>
      </table>
    </>
  )
}

export default Reviews



