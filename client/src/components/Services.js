import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Link to="/">←Back</Link>
      <h1 className="service_title">Services</h1>
      <div className="service">
        <img
          className="serviceImg"
          src="https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg?w=996&t=st=1659504700~exp=1659505300~hmac=605fcb10e10a1a8d512dd47d00d11c2b90a5cc15208c803125a8dce096e89c4e"
          alt="people grouping hands together"
        />
        <br />
        <h5>
          At Safe Journey we believe that discrimination or harassment in any
          form is intolerable
        </h5>
        <p>
          We understand that it may be difficult or upsetting to revisit your
          negative travel experiences, so if you need support please reach out
          to one of the following great resources:
        </p>

        <p>Crisis Support</p>
        <a href="https://www.lifeline.org.au/">Lifeline</a>
        <br />
        <a href="https://kidshelpline.com.au/"> Kid's Helpline</a>
        <br />

        <br />

        <p>Racism</p>
        <a href="https://au.reachout.com/articles/what-to-do-if-youre-experiencing-racism">
          Reachout - Racism
        </a>
        <br />
        <a href="https://www.youngminds.org.uk/young-person/coping-with-life/racism-and-mental-health/">
          {" "}
          Young Minds - Racism and Mental Health
        </a>
        <br />
        <a href="https://www.beyondblue.org.au/who-does-it-affect/the-invisible-discriminator/respond-to-racism">
          {" "}
          Beyond Blue - Racism
        </a>
        <br />
        <br />

        <p>LGBTQIA+ Discrimination</p>
        <a href="https://au.reachout.com/articles/lgbtqi-support-services">
          {" "}
          Reach Out - LGBTQIA+ Support Services
        </a>
        <br />
        <a href="https://www.queerspace.org.au/"> Queerspace</a>
        <br />
        <a href="https://www.beyondblue.org.au/who-does-it-affect/lesbian-gay-bi-trans-and-intersex-lgbti-people/helpful-contacts-and-websites">
          {" "}
          Beyond Blue - LGBTQIA+ Helpful Contacts and Websites
        </a>
        <br />
        <br />

        <p>Support services for women</p>
        <a href="https://www.wire.org.au/">
          WIRE - Support, referrals & information on any issue for women,
          non-binary & gender diverse people
        </a>
        <br />
        <a href="https://www.vwt.org.au/support-services-2/">
          {" "}
          Victorian Women's Trust - Support Services
        </a>
        <br />
      </div>
    </div>
  );
};

export default Services;
