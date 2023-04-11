'use-client';

import { Inter } from 'next/font/google';
import RootLayout from '@/components/layout';
import Banner from '@/components/banner';
import ProductShow from '@/components/product-show';
import { BrowserView, MobileView } from 'react-device-detect';

const inter = Inter({ subsets: ['latin'] });
const Home = () => {
    return (
        <RootLayout>
            <div className={`md:container md:mx-auto pt-10`}>
                <Banner />
                <ProductShow />
            </div>
        </RootLayout>
    );
};
export default Home;
