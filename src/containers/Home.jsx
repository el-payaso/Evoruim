import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import ReactPlayer from "react-player";

import videoImg from "../assets/images/videoImg.png"


import {
  appleStore,
  googleplay,
  bannner,
  video,
  card1,
  tv,
  ecobank,
  orange,
  android,
  iphone,
  team1,
} from "../assets/images";

import {
  upload,
  monetization,
  stream,
  downarrow,
  insta,
  UploadIcon,
  MoneterizationIcon,
  StreamIcon,
  PlayStore,
  Apple,
} from "../assets/icons";

import "../styles/home.scss";
import Card from "../components/Card";
import { cardsData } from "../utility/data";
import Slider from "../components/Slider";
import FooterEvorium from "../components/FooterEvorium";

function Home() {
  const [itemsToLoad, setItemsToLoad] = useState(5);

  const loadMore = () => {
    setItemsToLoad(itemsToLoad + 5);
  };
  const loadLess = () => {
    setItemsToLoad(itemsToLoad - 5);
  };
  return (
    <>
      <section className="banner-home">
        <Image src={bannner} className="bannerImg img-fluid" />
        <Container>
          <Row>
            <Col md={5} sm={12}>
              <div className="text-block">
                <h1>Learn crypto from beginner to Pro</h1>
                <p>
                  The Screeno ecosystem is designed to help you generate profit.
                  Set up complete sales and marketing funnels with ease using
                  the Screeno
                </p>
                <div className="btns-group">
                  <a href="#" className="try-btn">
                    Try for Free
                  </a>
                  <a href="#" target="_blank" className="aple">
                    {/* <Image src={appleStore} /> */}
                    <Apple/>
                   
                  </a>
                  <a href="#" target="_blank" className="gpay">
                    {/* <Image src={googleplay} /> */}
                    <PlayStore/>
                  </a>
                </div>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
      <main>
        <section className="platform-section">
          <Container>
            <div className="title-block">
              <h3>All-in-one platform</h3>
              <p>
                You take care of the video quality and we take care of
                everything else
              </p>
            </div>
            <Row>
              <Col md={8}>
                <div className="video-wrapper">
                  <ReactPlayer url={"https://www.youtube.com/watch?v=LXb3EKWsInQ"} />
                </div>
              </Col>
              <Col md={4}>
                <div className="right-text">
                  <div className="card-all">
                    <h4>
                    
                      <span className="cardIcon">
                        <UploadIcon/>
                      </span>

                      Upload & Organize
                    </h4>
                    <p>
                      Upload in bulk, organize content in categories, add custom
                      filters & upload extras.
                    </p>
                  </div>
                  <div className="card-all">
                    <h4>
                      
                      <span className="cardIcon">
                      <MoneterizationIcon/>
                      </span>
                       Monetization
                    </h4>
                    <p>
                      Offer subscriptions or one-time purchases. Accept credit
                      cards & PayPal.
                    </p>
                  </div>
                  <div className="card-all">
                    <h4>
                    
                    <span className="cardIcon">
                      <StreamIcon/>
                      </span>
                       Stream On-Demand
                    </h4>
                    <p>
                      Showcase your content in a beautiful on-demand video
                      catalog.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="popular-section">
          <Container>
            <div className="title-block">
              <h2 className="text-white">
                most popular <Image src={downarrow} />
              </h2>
              <a href="#" className="view-all-link">
                View All
              </a>
            </div>
            <Row className="popular-row">
              {cardsData
                .slice(0, itemsToLoad)
                .map(
                  (
                    {
                      id,
                      title,
                      image,
                      duration,
                      views,
                      description,
                      watched,
                      url,
                      subsType,
                      amount,
                    },
                    index
                  ) => (
                    <Card
                      url={url}
                      key={id}
                      title={title}
                      img={image}
                      duration={duration}
                      views={views}
                      watched={watched}
                      subsType={subsType}
                      amount={amount}
                      description={description}
                    />
                  )
                )}
            </Row>
            <div className="text-center loadBtnWrap pt-5">
              {itemsToLoad < cardsData.length && (
                <button onClick={loadMore} className="load-more-btn">
                  Load more
                </button>
              )}
           
              {itemsToLoad > 5 && (
                <button onClick={loadLess} className="load-more-btn">
                  Load Less
                </button>
              )}
            </div>
          </Container>
        </section>

        {/* slider here */}
        <Slider />
        <section className="our-star-team-section circle-right">
          <Container>
            <div className="title-block text-center text-white">
              <h3>Our star team</h3>
              <p>
                Consistent quality and experience across all platforms and
                devices.
              </p>
            </div>
            <Row className="row-team pt-5">
              <Col md={3}>
                <div className="team-card">
                  <div className="card-head">
                    <Image src={team1} className="card-imgs" />
                    <a href="#" className="insta-link">
                      <Image src={insta} />
                    </a>
                  </div>
                  <div className="card-bottom text-center text-white">
                    <h5>Name<br/> Surname</h5>
                    <p>
                      Showcase your content in a beautiful on-demand video
                      catalog.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="team-card">
                  <div className="card-head">
                    <Image src={team1} className="card-imgs" />
                    <a href="#" className="insta-link">
                      <Image src={insta} />
                    </a>
                  </div>
                  <div className="card-bottom text-center text-white">
                    <h5>Name<br/> Surname</h5>
                    <p>
                      Showcase your content in a beautiful on-demand video
                      catalog.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="team-card">
                  <div className="card-head">
                    <Image src={team1} className="card-imgs" />
                    <a href="#" className="insta-link">
                      <Image src={insta} />
                    </a>
                  </div>
                  <div className="card-bottom text-center text-white">
                    <h5>Name<br/> Surname</h5>
                    <p>
                      Showcase your content in a beautiful on-demand video
                      catalog.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="team-card">
                  <div className="card-head">
                    <Image src={team1} className="card-imgs" />
                    <a href="#" className="insta-link">
                      <Image src={insta} />
                    </a>
                  </div>
                  <div className="card-bottom text-center text-white">
                    <h5>Name<br/> Surname</h5>
                    <p>
                      Showcase your content in a beautiful on-demand video
                      catalog.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="our-partners-section">
          <Container>
            <div className="title-block text-center">
              <h2 className="text-white">Our partners</h2>
              <p className="text-white">
                Consistent quality and experience across all platforms and
                devices.
              </p>
            </div>
            <div className="row align-items-center pt-5">
              <div className="card-partner">
                <Image src={tv} />
              </div>
              <div className="card-partner">
                <Image src={orange} />
              </div>
              <div className="card-partner">
                <Image src={ecobank} />
              </div>
              <div className="card-partner">
                <Image src={iphone} />
              </div>
              <div className="card-partner">
                <Image src={android} />
              </div>
            </div>
          </Container>
        </section>
      
      </main>
    </>
  );
}

export default Home;
