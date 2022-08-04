import { useState } from 'react'
import { Link } from 'react-router-dom'

const ReviewRow = (props) => {
    const { review, handleDelete } = props
    const handleClick = (event) => {
      handleDelete(review._id)
    }
    return (
      <tr>
        <td>
          <Link to={review._id}>{review.description}</Link>
        </td>
        <td>{review.lgbtqi_acceptance}</td>
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
              <th>Detail</th>
              <th>LGBTQIA+ Acceptance</th>
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



