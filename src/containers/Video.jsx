import React, { useState } from "react";
import "../styles/video.scss";
import ReactPlayer from "react-player";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "../components/Card";
import { cardsData } from "../utility/data";
import { Play, lockscreen } from "../assets/icons";
import CheckoutForm from "../components/Stripe";
import {loadStripe} from '@stripe/stripe-js';

import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const VideoPlayer = () => {
  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  
  
  console.log("running");
  const [itemsToLoad, setItemsToLoad] = useState(5);
  const [show,setShow] = useState(false)
  

  const regex = /[?&]type=([^&]+)/;
  const subscriptionType = window.location.search.match(regex);

  // console.log(subscriptionType[1])

  const videoURL = window.location.search.slice(
    1,
    window.location.search.length
  );
  const loadMore = () => {
    setItemsToLoad(itemsToLoad + 5);
  };
  const loadLess = () => {
    setItemsToLoad(itemsToLoad - 5);
  };
  return (
    <>

<Elements stripe={stripePromise} options={options}>
    <CheckoutForm show={show} />
 


      <section
        style={{
          borderBottom: 1,
          borderWidth: 1,
          borderColor: "red",
        }}
        className="videoWrapper py-5"
      >
        <Container>
          <Row>
            <Col md={7}>
              <div
                className="videoWrapper__left"
                style={{
                  position: "relative",
                }}
              >
                <ReactPlayer controls={true} url={"https://www.youtube.com/watch?v=LXb3EKWsInQ"} />

                {subscriptionType?.[1] == 'pro' &&  <div
                  style={{
                    backgroundColor: "transparent",
                    height: "100%",
                    width: "100%",
                    color: "white",
                    position: "absolute",
                    top: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={lockscreen}
                    style={{
                      height: 70,
                      width: 70,
                      color: "red",
                    }}
                  />
                </div> }
              
              </div>
            </Col>

            <Col md={5}>
              <div className="videoWrapper__right">
                <div className="videoWrapper__caption">
                  <small>Andy William | Interface, Experience</small>
                  <h1>Crypto Staking | Making Money with Staking</h1>

                  <div className="videoWrapper__caption__descp">
                    <h4>Description</h4>
                    <p>
                      In this video we will learn how to create landing page for
                      cryptocurrency apps ...read more
                    </p>
                  </div>

                  <div className="videoWrapper__caption__midbuttons">
                    <div className="midbuttons__left">
                      <span className="videoLength">1h 46min</span>
                      <span className="videoViews">53k views</span>
                    </div>
                    <div className="midbuttons__right">
                      <button className="mid--btn">Download</button>
                      <button className="mid--btn">Share</button>
                    </div>
                  </div>

                  <div className="videoWrapper__caption__timecodec">
                    <h4>Time Codes</h4>

                    <div className="timecodec__list">
                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>

                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>

                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>

                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>

                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>

                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <button onClick={() => setShow(true)} className="buyBtn">Buy For $1.0</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="video-information"></div>
      </section>

      <section className="popular-section popular-section1">
        <Container>
          <div className="title-block title-block-border">
            <h1 className="text-white">You might also like</h1>

            <div className="d-flex justify-content-between align-items-center">
            <div className="text-block pe-5">
              <p className="text-white mb-0">
                The Screeno ecosystem is designed to help you generate
                profit.Setup complete sales and marketing funnels with ease
                using the Screeno
              </p>
            </div>
            {itemsToLoad < cardsData.length && (
              
                <button onClick={loadMore} className="view-All-btn">
                  View All
                </button>
              
            )}
            :
            {itemsToLoad > 5 && (
             
                <button onClick={loadLess} className="view-All-btn">
                  View Less
                </button>
             
            )}
          </div>
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
                    subscription,
                    url,
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
                    subscription={subscription}
                    description={description}
                  />
                )
              )}
          </Row>
          {/* <div className="text-center pt-5">
            {itemsToLoad < cardsData.length && (

              <button onClick={loadMore} className="load-more-btn">Load more</button>)}
            </div> */}
        </Container>
      </section>

      </Elements>
    </>
  );
};
export default VideoPlayer;
