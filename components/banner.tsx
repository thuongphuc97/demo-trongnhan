import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Banner = () => {
    return (
        <Carousel
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
        >
            <div>
                <Image
                    src={'/images/banner-am-thanh-xe-hoi-1-2048x560.jpg'}
                    alt='Phu'
                    height={380}
                    width={1390}
                />
            </div>
            <div>
                <Image
                    src='/images/banner-phu-ceramic-o-to.jpg'
                    alt='11'
                    height={380}
                    width={1390}
                />
            </div>
        </Carousel>
    );
};

export default Banner;
