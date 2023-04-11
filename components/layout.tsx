// import '@/styles/globals.css';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';
import ContactWidget from '@/components/widgets/contact';
import MobileHeader from './mobile-header';

interface LayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <MobileHeader />
            <main className='scroll-smooth'>{children}</main>
            <ContactWidget />
            <Footer />
        </>
    );
};

export default RootLayout;
