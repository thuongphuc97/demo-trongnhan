import styles from '@/components/footer.module.scss';
import {
    faAddressBook,
    faMapMarked,
    faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
const cx = classNames.bind(styles);
const imgLink =
    'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80';
const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('footer-column')}>
                    <Image
                        src='/images/white-logo.png'
                        // className={cx('logo')}
                        alt='SangTrongAuto'
                        width='190'
                        height='98'
                    />
                    <span className={cx('footer-address')}>
                        <FontAwesomeIcon
                            icon={faMapMarked}
                            color='red'
                            fontSize={20}
                            className='mr-5 mt-5'
                        />
                        Địa chỉ:
                    </span>
                </div>
                <div className={cx('vertical-line')} />
                <div className={cx('footer-column')}>
                    <h3 className={cx('footer-title')}>hỗ trợ khách hàng</h3>
                    {customerSupport.map((item, index) => (
                        <Link
                            href={'/'}
                            className={cx('footer-link')}
                            key={index}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                <div className={cx('vertical-line')} />
                <div className={cx('footer-column')}>
                    <h3 className={cx('footer-title')}>sản phẩm</h3>
                    {items.map((item, index) => (
                        <Link
                            href={'/'}
                            className={cx('footer-link')}
                            key={index}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
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
];
const customerSupport = [
    'Giới thiệu về chúng tôi',
    'Hướng dẫn mua hàng',
    'Chính sách bảo hành',
    'Chính sách giao hàng',
    'chính sách bảo mật',
];
export default Footer;
