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
                <img
                    src={
                        'https://proauto.vn/wp-content/uploads/2023/02/BANNER-WEB-CACH-AM-STP-21022023-01.png'
                    }
                    alt='Phu'
                    height={380}
                    width={1390}
                />
            </div>
            <div>
                <img
                    src='https://proauto.vn/wp-content/uploads/2022/09/banner-cach-am-xe-hoi-1.jpg'
                    alt='11'
                />
            </div>
        </Carousel>
    );
};

export default Banner;
