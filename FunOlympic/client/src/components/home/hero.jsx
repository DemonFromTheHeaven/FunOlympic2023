import { Col, Row } from 'antd';
import { Carousel } from 'antd';

import image1 from '../../assets/images/banner-img1.jpg';
import image2 from '../../assets/images/banner-img2.jpg';
import image3 from '../../assets/images/banner-img3.jpg';

function Hero() {
  return (
    <div className='heroBlock'>
      <Row gutter={[24, 24]}>
        {/* carousel */}
        <Col xs={24} lg={18}>
          <Carousel autoplay>
            <div>
              <img src={image1} alt="banner 1" />

            </div>
            <div>
              <img src={image2} alt="banner 2" />
            </div>
            <div>
              <img src={image3} alt="banner 3" />
            </div>
          </Carousel>
        </Col>
        {/* hero blocks */}
        <Col xs={20} lg={6}>
          <div className='heroBlocks'>
            <div className='holder'>
              <div className='icon'>
                <i className="fa-solid fa-car"></i>
              </div>
              <div className='content'>
                <h3>Easy Travel &amp; Return</h3>
                <p>Easy, Fast and Cheap travel and hotel cost.</p>
              </div>
            </div>
            <div className='holder'>
              <div className='icon'>
                <i className="fa-solid fa-football-ball"></i>
              </div>
              <div className='content'>
                <h3>25 Most Popular Sports</h3>
                <p>And 20000 Players from 200 countries Participating.</p>
              </div>
            </div>
            <div className='holder'>
              <div className='icon'>
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className='content'>
                <h3>Free Online Streaming</h3>
                <p>Watch the games free at your own home.</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;