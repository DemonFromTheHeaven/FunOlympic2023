import { Col, Row } from 'antd';
import image1 from '../../assets/images/img9.jpg';
import image2 from '../../assets/images/img10.jpg';
import image3 from '../../assets/images/img11.jpg';
import image4 from '../../assets/images/img9.jpg'

const products = [
  {
    key: '1',
    image: image1,
  },
  {
    key: '2',
    image: image2,
  },
  {
    key: '3',
    image: image3,
  },
  {
    key: '4',
    image: image4,
  }
]

function TopBrands() {
  return (
    <div className="block products">
      <h2>Top Brands</h2>
      <Row gutter={[24, 24]}>
        {products.map(product => {
          return (
            <Col xs={{ span: 12 }} sm={{ span: 6 }} key={product.key}>
              <div className="content">
                <div className="image">
                  <img src={product.image} alt="product" />
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default TopBrands;