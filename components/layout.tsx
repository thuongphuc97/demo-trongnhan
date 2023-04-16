import Footer from '@/components/footer';
import Header from '@/components/header';
import ContactWidget from '@/components/widgets/contact';
import MobileHeader from '@/components/mobile/mobile-header';
import ScrollTop from '@/components/widgets/scroll-top';
import { useState } from 'react';
import Cart from '@/components/cart';

interface LayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
    const [scrollTop, setScrollTop] = useState(0);
    const [openCart, setOpenCart] = useState(0);
    const handleScroll = (event: any) => {
        setScrollTop(event.currentTarget.scrollTop);
        console.log(scrollTop);
    };
    return (
        <div onScroll={handleScroll}>
            <Header />
            <Cart />
            <MobileHeader />
            {children}
            <ContactWidget />
            <ScrollTop hide={scrollTop} />
            <Footer />
        </div>
    );
};

export default RootLayout;
