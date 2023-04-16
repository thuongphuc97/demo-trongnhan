import Link from 'next/link';
import styles from '@/components/mobile/mobile-nav.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const MobileNav = () => {
    return (
        <div className={cx('wrapper')}>
            {items.map((item, index) => (
                <Link
                    href='/'
                    className={cx('item')}
                    key={index}
                >
                    {item}
                </Link>
            ))}
        </div>
    );
};
const items = [
    'Phim cách nhiệt',
    'Cách âm',
    'Bọc ghế da',
    'Độ đèn',
    'Màn hình ô tô',
    'Camera Ô tô',
    'Âm thanh',
    'Độ Limousie',
    'Phụ kiện theo xe',
    'Phụ kiện tiện ích',
    'Chăm sóc xe',
    'Dans Wrap',
];
export default MobileNav;
