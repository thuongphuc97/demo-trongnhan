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
            <Banner />
            <MobileNav />
            <ProductShow />
        </RootLayout>
    );
};
export default Home;
