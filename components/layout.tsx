import Footer from '@/components/footer';
import Header from '@/components/header';
import ContactWidget from '@/components/widgets/contact';
import MobileHeader from '@/components/mobile/mobile-header';
import ScrollTop from '@/components/widgets/scroll-top';
import { useState } from 'react';
import Cart from '@/components/cart';
import Head from 'next/head';
import classNames from 'classnames/bind';
import styles from './layout.module.scss';
const cx = classNames.bind(styles);
interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

const RootLayout = ({
    children,
    title = 'Trọng Nhân Auto - Đồ chơi Ô tô ',
}: LayoutProps) => {
    const [scrollTop, setScrollTop] = useState(0);
    const [openCart, setOpenCart] = useState(0);
    const handleScroll = (event: any) => {
        setScrollTop(event.currentTarget.scrollTop);
        console.log(scrollTop);
    };
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div
                onScroll={handleScroll}
                className={cx('body')}
            >
                <Header />
                <Cart />
                <MobileHeader />
                <div className={`md:container md:mx-auto pt-10`}>
                    {children}
                </div>
                <ContactWidget />
                <ScrollTop hide={scrollTop} />
                <Footer />
            </div>
        </>
    );
};

export default RootLayout;
