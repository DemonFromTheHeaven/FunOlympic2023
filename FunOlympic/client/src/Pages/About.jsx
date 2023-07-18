import { Tabs } from 'antd';

import aboutBanner from '../assets/images/aboutBanner.jpg';

const { TabPane } = Tabs;

const About = () => {
  return (
    <div className="block aboutPage">
      <div className="container">
        <h2>About</h2>
        <div className='bannerImage'>
          <img src={aboutBanner} alt="banner" />
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="About" key="1">
            <p>Yokyo is a captivating and visionary city that exists solely in the realm of imagination. As a city crafted from creative minds, Yokyo is a place where imagination knows no bounds, and possibilities are endless. Here are some key features of this imaginary city:</p>
            <p>Yokyo is an extraordinary city that exists solely in the realm of imagination. Its skyline is adorned with breathtaking architectural marvels, where futuristic designs and vibrant colors create a visually stunning cityscape. Divided into unique districts, each with its own theme and atmosphere, Yokyo offers a range of experiences. From the whimsical Fairyland District to the Techno District with its neon lights and holographic displays, residents and visitors are transported to a world beyond imagination. The city thrives on artistic expression, with art galleries, street performances, and interactive installations scattered throughout. Yokyo's innovative transportation system combines advanced technology with a touch of magic, with levitating trains, flying cars, and teleportation devices offering seamless and exhilarating travel. In this urban paradise, lush green spaces coexist with magical creatures, and vibrant flora adds to the enchanting environment. Yokyo's extraordinary cuisine pushes the boundaries of taste and texture, while its festivals and celebrations bring the city to life with spectacular parades and dazzling fireworks. Embracing innovation in all forms, Yokyo is at the forefront of technological advancement, integrating robotics, AI, and holographic technology into everyday life.</p>
            <p>Yokyo is a place where dreams come to life, where imagination knows no bounds, and where possibilities are endless. It is a city that fuels creativity and inspires boundless exploration. In Yokyo, residents and visitors alike are immersed in a world of wonders, where artistic expression, technological innovation, and the spirit of imagination thrive. This imaginary city is a testament to the limitless power of human creativity and a reminder of the incredible possibilities that lie within the realms of the mind.</p>
            <p>Yokyo is a place where dreams come to life and imagination takes flight. Its awe-inspiring architecture, magical districts, artistic expressions, and fantastical elements make it an imaginary city like no other—a city that fuels the imagination and inspires boundless creativity.</p>

          </TabPane>
          <TabPane tab="Words of Mayor" key="2">
            <p>Today, I stand before you with immense joy and excitement as the proud Mayor of Yokyo, to announce that our magnificent city has been chosen to host the Fun Olympics! It is an honor and a testament to the imaginative spirit and vibrant energy that defines Yokyo.</p>
            <p>As Mayor, I extend a warm welcome to all participants, spectators, and visitors who will grace our city during this grand celebration of sports and fun. The Fun Olympics in Yokyo will be a truly unforgettable event, where the boundaries of imagination will be pushed and new dimensions of entertainment will be explored.</p>
            <p>
              In Yokyo, we believe that joy and laughter are as important as winning medals. Our commitment is to provide an atmosphere that fosters camaraderie, unity, and the sheer delight of participating in these games. Athletes from around the world will compete not only for victory but also for the sheer joy of engaging in the spirit of fun and friendship.
            </p>
            <p>Together with our enthusiastic volunteers, dedicated organizers, and supportive community, we will create a spectacle that will leave an indelible mark on the history of the Fun Olympics. Yokyo will showcase our city's boundless creativity, offering a blend of sportsmanship, fantasy, and cultural richness that will mesmerize the world.</p>
            <p>To all who will join us on this extraordinary journey, I invite you to embrace the spirit of Yokyo, a spirit that embraces innovation, imagination, and a celebration of the human spirit. Let us come together in the true essence of sportsmanship and revel in the joy and wonder that the Fun Olympics in Yokyo will undoubtedly bring.</p>
          </TabPane>

        </Tabs>
      </div>
    </div>
  );
}

export default About;