import { Col, Row, Button } from 'antd';
import image1 from '../../assets/images/football.jpg';
import image2 from '../../assets/images/volleyball.jpg';
import image3 from '../../assets/images/swimming.jpg'
import image4 from '../../assets/images/cricket.jpg';


const products = [
  {
    key: '1',
    image: image1,
    title: 'Nepal wins 10 Gold',
    type: 'Football'
  },
  {
    key: '2',
    image: image2,
    title: 'India Beats China',
    type: 'Volleyball'
  },
  {
    key: '3',
    image: image3,
    title: 'Pakistan Loses to India',
    type: 'Swimming'
  },
  {
    key: '4',
    image: image4,
    title: 'Nepal and India in final',
    type: 'Cricket'
  }
]

function HomeNews() {
  return (
    <div className="block products">
      <h2>News</h2>
      <Row gutter={[24, 24]}>
        {products.map(product => {
          return (
            <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key}>
              <div className="content">
                <div className="image">
                  <img src={product.image} alt="product" />
                </div>
                <h5>{product.title}</h5>
                <div className='price'>{product.type}</div>
                <Button type="primary">Read</Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default HomeNews;