'use client';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { handleOpenCart } from '@/redux/actions/app-action';
const cx = classNames.bind(styles);

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

const Header = () => {
    const dispath = useAppDispatch();
    const appConfig = useAppSelector((state) => state.appReducer);
    const { isCartOpen } = appConfig;
    const handleClickCartBtn = () => {
        dispath(handleOpenCart(!isCartOpen));
    };
    return (
        <>
            <div className={cx('header-wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('header-left')}>
                        <Image
                            src='/logotn.png'
                            // className={cx('logo')}
                            alt='SangTrongAuto'
                            width='131'
                            height='98'
                        />
                        <div className={cx('search')}>
                            <input
                                placeholder='Tìm kiếm'
                                spellCheck={false}
                            />
                            <div className={cx('btn-search')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>

                        <div
                            className={cx('cart-btn')}
                            onClick={() => {
                                handleClickCartBtn();
                            }}
                        >
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>Giỏ hàng</span>
                        </div>
                    </div>
                    <div className={cx('header-right')}>
                        <Link
                            href={'/'}
                            className={cx('header-link')}
                        >
                            Kinh nghiệm độ xe
                        </Link>
                        <Link
                            href={'/'}
                            className={cx('header-link')}
                        >
                            Liên hệ
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('menu-wrapper')}>
                <div className={cx('inner')}>
                    {items.map((item, index) => (
                        <Link
                            href='/'
                            className={cx('menu-item')}
                            key={index}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
