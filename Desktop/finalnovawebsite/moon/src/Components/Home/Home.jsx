import React from 'react'
import './home.css';
import video from '../../assets/video.mp4'

const Home = () => {
  return (
    <section className='home'>
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type='video/mp4'></video>

        <div className='homeContent container'>
            <div className="textDiv">
                <span className="smallText">
                    Welcome to our
                </span>
                <h1 className="homeTitle">
                  Image Gallery
                </h1>
            </div>

            <div className="cardDiv grid">
<div className="destinationInput">
    <label htmlFor="city">Explore our gallery</label>
    <div className="input flex"></div>
</div>
            </div>
        </div>
    </section>
  )
}

export default Home
