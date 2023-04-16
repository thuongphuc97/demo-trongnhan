'use-client';

import { Inter } from 'next/font/google';
import RootLayout from '@/components/layout';
import Banner from '@/components/banner';
import ProductShow from '@/components/product-show';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileNav from '@/components/mobile/mobile-nav';

const inter = Inter({ subsets: ['latin'] });
const Home = () => {
    return (
        <RootLayout>
            <div className={`md:container md:mx-auto pt-10`}>
                <Banner />
                <MobileNav />
                <ProductShow />
            </div>
        </RootLayout>
    );
};
export default Home;
