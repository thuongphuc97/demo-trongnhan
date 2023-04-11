import { Inter } from 'next/font/google';
import RootLayout from '@/components/layout';
import Banner from '@/components/banner';
import styles from '@/pages/index.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import ProductShow from '@/components/product-show';

const inter = Inter({ subsets: ['latin'] });
const cx = classNames.bind(styles);
const Home = () => {
    return (
        <RootLayout>
            <div className={`md:container md:mx-auto pt-10`}>
                <Banner />
                <ProductShow />
                <ProductShow />
                <ProductShow />
                <ProductShow />
                <ProductShow />
            </div>
        </RootLayout>
    );
};
export default Home;
