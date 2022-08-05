import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to="/">←Back</Link>
      <h1>About</h1>
      <div className="service">
        <img
          className="serviceImg"
          src="https://img.freepik.com/free-photo/two-male-hiker-sitting-top-rock-mountain-looking-scenic-view_23-2148182804.jpg?w=1480&t=st=1659536293~exp=1659536893~hmac=5f7d732f0a13bb4e09570825a200508078a88b47e1853e712464bd2fe5246abc"
          alt="people grouping hands together"
        />
        <br />
        <h5>Feel safe when you're out and about exploring</h5>
        <h6>Read travel reviews from other people like you</h6>
        <p>
          Travel can be amazing and life-changing, but for some people, like
          members of the LGBTQIA+ community, people of colour and women, it can
          also mean discrimination and harassment.
        </p>
        <p>
          Safe Journey was created so users can share and report their travel
          experiences. Users can give a country a rating out of 5 and a detailed
          review.
        </p>
        <p>
          Sharing this information allows others to be prepared and to make
          well-informed decisions about where and how they travel.
        </p>
      </div>
    </div>
  );
};

export default About;
