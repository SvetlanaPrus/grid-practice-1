import React from 'react';
import factory from './images/factory 1.jpg';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <section className="header_items">
          <p>ALECTIA</p>
          <div>
            <p><a href="#top">Home</a></p>
            <p><a href="#top">Services</a></p>
            <p><a href="#top">Projects</a></p>
            <p><a href="#top">Careers</a></p>
            <p><a href="#top">About ALECTIA</a></p>
          </div>
        </section>
      </header>
      <main className="main">
        <section className="gallery">
          <div className="gallery_items">
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>

            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>

            <div className="gallery_item_vert">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item_big">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>

            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
            <div className="gallery_item">
              <img src={factory} alt="factory" />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div>*** FOOTER ***</div>
      </footer>
    </div>
  );
}

export default App;
