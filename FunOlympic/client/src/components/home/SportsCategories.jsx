import { Col, Row } from 'antd';
import image1 from '../../assets/images/football.jpg';
import image2 from '../../assets/images/cricket.jpg';
import image3 from '../../assets/images/basketball.jpg';
import image4 from '../../assets/images/volleyball.jpg';
import image5 from '../../assets/images/swimming.jpg';
import image6 from '../../assets/images/tennis.jpg';
import image0 from '../../assets/images/olympic.png';


const sportsCategories = [
  {
    key: '1',
    image: image1,
    title: 'Football'
  },
  {
    key: '2',
    image: image2,
    title: 'Cricket'
  },
  {
    key: '3',
    image: image3,
    title: 'Basketball'
  },
  {
    key: '4',
    image: image4,
    title: 'Volleyball'
  },
  {
    key: '5',
    image: image5,
    title: 'Swimming'
  },
  {
    key: '6',
    image: image6,
    title: 'Tennis'
  },
  {
    key: '7',
    image: image5,
    title: 'Swimming'
  },
  {
    key: '8',
    image: image0,
    title: 'Gymnastics'
  },
  {
    key: '9',
    image: image0,
    title: 'Cycling'
  },
  {
    key: '10',
    image: image0,
    title: 'Weightlifting'
  },
  {
    key: '11',
    image: image0,
    title: 'Boxing'
  },
  {
    key: '12',
    image: image0,
    title: 'Wrestling'
  },
  {
    key: '13',
    image: image0,
    title: 'Badminton'
  },
  {
    key: '14',
    image: image0,
    title: 'Table Tennis'
  },
  {
    key: '15',
    image: image0,
    title: 'Archery'
  },
  {
    key: '16',
    image: image0,
    title: 'Shooting'
  },
  {
    key: '17',
    image: image0,
    title: 'Fencing'
  },
  {
    key: '18',
    image: image0,
    title: 'Hockey'
  },
  {
    key: '19',
    image: image0,
    title: 'Sailing'
  },
  {
    key: '20',
    image: image0,
    title: 'Canoeing'
  },
  {
    key: '21',
    image: image0,
    title: 'Rowing'
  },
  {
    key: '22',
    image: image0,
    title: 'Diving'
  },
  {
    key: '23',
    image: image0,
    title: 'Taekwondo'
  },
  {
    key: '24',
    image: image0,
    title: 'Synchronized Swimming'
  },
  {
    key: '25',
    image: image0,
    title: 'Rhythmic Gymnastics'
  },
  // Add more sports below...
];


function SportsCategories() {
  return (
    <div className="block productCategories">
      <h2>Sports Categories</h2>
      <Row gutter={[24, 24]}>
        {sportsCategories.map(sportsCategory => {
          return (
            <Col xs={{ span: 12 }} sm={{ span: 6 }} lg={{ span: 4 }} key={sportsCategory.key}>
              <div className="content">
                <div className="image">
                  <img src={sportsCategory.image} alt="sports" />
                </div>
                <h3>{sportsCategory.title}</h3>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default SportsCategories;