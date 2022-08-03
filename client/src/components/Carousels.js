import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'

function Carousels() {
    return (
        <div>
            <hr />
            <h2>Browse by Continent</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/giraffes-african-landscape_181624-30119.jpg?w=996&t=st=1659336969~exp=1659337569~hmac=22d5c5b0ae22b83ccd57dd2e96ba9b202dc80e6ff09980ddae0a52ed3eadbb66"
                        alt="Giraffes in the wild"
                    />
                    <Carousel.Caption>
                        <Link className="continentTitle" to="/Africa"><h3 className="continentTitle">Africa</h3></Link>
                        <p className="continentDesc">Africa. There's nowhere like it on the planet for wildlife, wild lands and rich traditions that endure. Prepare to fall in love.

</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/old-tower-with-city_1127-4061.jpg?w=996&t=st=1659337035~exp=1659337635~hmac=d10d3305b8e9856d09d97a4225b0de4d850d20677732d437f8232ab6b7612a18"
                        alt="Asian city overlook"
                    />

                    <Carousel.Caption>
                        <Link className="continentTitle" to="/Asia"><h3 className="continentTitle">Asia</h3></Link>
                        <p className="continentDesc">From the nomadic steppes of Kazakhstan to the frenetic streets of Hanoi, Asia is a continent so full of intrigue, adventure, solace and spirituality that it has fixated and confounded travellers for centuries.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?w=996&t=st=1659337242~exp=1659337842~hmac=ebc03ab4d8bf62f4f66c943e4fff1686d679aa6f89b9759565d84084d70d154b"
                        alt="Big Ben at sunset"
                    />

                    <Carousel.Caption>
                        <Link className="continentTitle" to="/Europe"><h3 className="continentTitle">Europe</h3></Link>
                        <p className="continentDesc">
                        There simply is no way to tour Europe and not be awestruck by its natural beauty, epic history and dazzling artistic and culinary diversity.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/sunrise-mesa-arch-canyonlands-national-park-near-moab-utah-usa_268835-1016.jpg?w=996&t=st=1659337370~exp=1659337970~hmac=d523ccec4b979655b9eba42dd24e7fa4563aa140810007b6817d6928e8d76337"
                        alt="Canyon in North America"
                    />

                    <Carousel.Caption>
                        <Link className="continentTitle" to="/North-America"><h3 className="continentTitle">North America</h3></Link>
                        <p className="continentDesc">
                        The heart of North America beats through towering forests, undulating fields, high-plain deserts, pulsating metropolises and offbeat oases.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/beautiful-sunset-deserted-paradise-island-mantanani_242111-17790.jpg?w=996&t=st=1659337443~exp=1659338043~hmac=fb295aa3130083944bd52fed489e60c9b5d9194d730b252f3e309949dcfea2d5"
                        alt="Beach Landscape"
                    />

                    <Carousel.Caption>
                        <Link className="continentTitle" to="/Oceania"><h3 className="continentTitle">Oceania</h3></Link>
                        <p className="continentDesc">
                        "Australia and New Zealand’s medley of mountains, deserts, reefs, forests, beaches and multicultural cities are an eternal draw for travellers. Remote, beautiful and friendly, the Pacific islands’ white sands and clear waters are almost dreamlike in their perfection."
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/high-angle-beautiful-machu-picchu-citadel-surrounded-by-foggy-mountains-urubamba-peru_181624-1395.jpg?w=996&t=st=1659337637~exp=1659338237~hmac=e9851a9acdd7062a674b6bf96b257625e32aa79b9e08da08cd77025dda1d112f"
                        alt="Machu Picchu"
                    />

                    <Carousel.Caption>
                        <Link className="continentTitle" to="/South-America"><h3 className="continentTitle">South America</h3></Link>
                        <p className="continentDesc">
                        Andean peaks, Amazonian rainforest, Patagonian glaciers, Incan ruins, white-sand beaches and vertiginous nightlife: the wonders of South America set the stage for incredible adventures.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carousels