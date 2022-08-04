import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Ratings } from './Form'

const Edit = (props) => {
    const navigate = useNavigate()

    const initialState = {
        // user_id: "",
        country: "",
        racism_experience: "",
        lgbtqi_acceptance: "",
        womens_safety: "",
        description: "",
    }
    const { reviewID } = useParams()
    const review = props.reviews.find((review) => review._id === reviewID)
    const index = props.reviews.indexOf(review)

    const [check, setCheck] = useState(initialState)

    const onSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(check, index)
        navigate("/my-reviews")
    }

    const giveInfo = () => {
        setCheck(review)
    }

    useEffect(() => {
        giveInfo()
    }, [reviewID])

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        const reviewHoliday = {
            ...check,
            [name]: type === "checkbox" ? checked : value,
        }
        setCheck(reviewHoliday)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <p>Country</p><input type="text" name="country" value={check.country} onChange={handleChange} /><br />
            <Ratings name="racism_experience" value={check.racism_experience.toString()} handleChange={handleChange}  /><br />
            <Ratings name="lgbtqi_acceptance" value={check.lgbtqi_acceptance.toString()} handleChange={handleChange} /><br />
            <Ratings name="womens_safety" value={check.womens_safety.toString()} handleChange={handleChange} /><br />
            {/* <p>Experience of Racism</p><input type="number" name="racism_experience" value={check.racism_experience} onChange={handleChange} />
            <p>Experience as person of the LGBTQIA+ Community</p><input type="number" name="lgbtqi_acceptance" value={check.lgbtqi_acceptance} onChange={handleChange} />
            <p>Experience as a person identifying as a woman</p><input type="number" name="womens_safety" value={check.womens_safety} onChange={handleChange} /> */}
            <p>Description</p><textarea name="description" value={check.description} onChange={handleChange} />
            <button type="submit">Save</button>
            </form>
        </div>
    )
}


export default Edit