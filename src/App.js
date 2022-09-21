import React from 'react'
import image01 from './images/01.png'
import image02 from './images/02.png'
import image03 from './images/03.png'
import image04 from './images/04.png'

import './App.scss'

const App = () => (
  <section class="team">
    <div class="center">
      <h1>Our Team</h1>
    </div>

    <div class="team-content">
      <div class="box">
        <img src={image01} />
        <h3>Steph Jobs</h3>
        <h5>Artist</h5>
        <div class="icons">
          <a href="#"><i class="ri-twitter-fill"></i></a>
          <a href="#"><i class="ri-facebook-box-fill"></i></a>
          <a href="#"><i class="ri-instagram-fill"></i></a>
        </div>
      </div>

      <div class="box">
        <img src={image02} />
        <h3>Steph Jobs</h3>
        <h5>Artist</h5>
        <div class="icons">
          <a href="#"><i class="ri-twitter-fill"></i></a>
          <a href="#"><i class="ri-facebook-box-fill"></i></a>
          <a href="#"><i class="ri-instagram-fill"></i></a>
        </div>
      </div>

      <div class="box">
        <img src={image03} />
        <h3>Steph Jobs</h3>
        <h5>Artist</h5>
        <div class="icons">
          <a href="#"><i class="ri-twitter-fill"></i></a>
          <a href="#"><i class="ri-facebook-box-fill"></i></a>
          <a href="#"><i class="ri-instagram-fill"></i></a>
        </div>
      </div>

      <div class="box">
        <img src={image04} />
        <h3>Steph Jobs</h3>
        <h5>Artist</h5>
        <div class="icons">
          <a href="#"><i class="ri-twitter-fill"></i></a>
          <a href="#"><i class="ri-facebook-box-fill"></i></a>
          <a href="#"><i class="ri-instagram-fill"></i></a>
        </div>
      </div>

    </div>
  </section>
)

export default App
