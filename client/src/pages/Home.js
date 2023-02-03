import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import japan1 from '../images/japan1.jpg';
import japan2 from '../images/japan2.webp';
import japan3 from '../images/japan3.webp';
import japan4 from '../images/japan4.webp';

import places1 from '../images/places1.webp';
import places2 from '../images/places2.jpg';
import places3 from '../images/places3.jpg';
import places4 from '../images/places4.jpg';
import places5 from '../images/places5.webp';
import places6 from '../images/places6.jpg';
import places7 from '../images/places7.webp';
import places8 from '../images/places8.webp';
import places9 from '../images/places9.jpg';
import places10 from '../images/places10.webp';
import places11 from '../images/places11.webp';
import places12 from '../images/places12.jpg';
import places13 from '../images/places13.jpg';
import places14 from '../images/places14.jpg';
import places15 from '../images/places15.jpg';
export default function App() {
  return (
    <div className='App'>
      <div className='transparent'>
        <div className='wrapper'>Official guide for traveling Japan- Travel Japan</div>
      </div>
      <Carousel swipeable={false} infiniteLoop={true} className='carousel-japan'>
        <div>
          <img src={japan1} alt='' className='japan-image' />
          <div className='legend'>
            <h4>COVID-19:</h4>
            <h1>Practical Information for Traveling to Japan</h1>
            <h4>Explore and discover with peace of mind</h4>
          </div>
        </div>
        <div>
          <img src={japan2} alt='' className='japan-image' />
          <div className='legend'>
            <h1>Unmissable Japan's Art Festivals in 2023</h1>
          </div>
        </div>
        <div>
          <img src={japan3} alt='' className='japan-image' />
          <div className='legend'>
            <h1>Exploring a Unique Culture and History of Brewing: Sake</h1>
            <h1>and Shochu in Japan</h1>
          </div>
        </div>
        <div>
          <img src={japan4} alt='' className='japan-image' />
          <div className='legend'>
            <h4>DISCOVER JAPAN</h4>
            <h1>DESTINATIONS</h1>
          </div>
        </div>
      </Carousel>
      <div className='title'>
        <h2 className='wrapper'>Popular Places</h2>
      </div>

      <section className='places'>
        <div className='row'>
          <div className='col'>
            <div className='image-text'>
              <img src={places1} alt='' className='big-image' />
              <span className='big-text'>Oirase Stream</span>
            </div>
          </div>
          <div className='col'>
            <div className='inner-row'>
              <div className='image-text'>
                <img src={places2} alt='' className='small-image' />
                <span className='small-text'>Iriomote Island (Iriomotejima)</span>
              </div>
              <div className='image-text'>
                <img src={places3} alt='' className='small-image' />
                <span className='small-text'>Shinsekai</span>
              </div>
            </div>
            <div className='inner-row'>
              <div className='image-text'>
                <img src={places4} alt='' className='small-image' />
                <span className='small-text'>Wakayama Adventure World</span>
              </div>
              <div className='image-text'>
                <img src={places5} alt='' className='small-image' />
                <span className='small-text'>Owara Kaze no Bon Festival</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='inner-row'>
              <div className='image-text'>
                <img src={places6} alt='' className='small-image' />
                <span className='small-text'>Daisetsuzan National Park</span>
              </div>
              <div className='image-text'>
                <img src={places7} alt='' className='small-image' />
                <span className='small-text'>Kagoshima City</span>
              </div>
            </div>
            <div className='inner-row'>
              <div className='image-text'>
                <img src={places8} alt='' className='small-image' />
                <span className='small-text'>Hakata Gion Yamakasa Festival</span>
              </div>
              <div className='image-text'>
                <img src={places9} alt='' className='small-image' />
                <span className='small-text'>Mt. Tsurugi</span>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='image-text'>
              <img src={places10} alt='' className='big-image' />
              <span className='big-text'>Magome (Nakasendo)</span>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div className='image-text'>
              <img src={places11} alt='' className='big-image' />
              <span className='big-text'>Kamakura</span>
            </div>
          </div>
          <div className='col'>
            <div className='inner-row'>
              <div className='image-text'>
                <img src={places12} alt='' className='small-image' />
                <span className='small-text'>Oarai & Hitachinaka</span>
              </div>
              <div className='image-text'>
                <img src={places13} alt='' className='small-image' />
                <span className='small-text'>Motonosumi-jinja Shrine</span>
              </div>
            </div>
            <div className='inner-row'>
              <div className='image-text'>
                <img src={places14} alt='' className='small-image' />
                <span className='small-text'>Shinjuku</span>
              </div>
              <div className='image-text'>
                <img src={places15} alt='' className='small-image' />
                <span className='small-text'>Oze National Park (Fukushima)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
