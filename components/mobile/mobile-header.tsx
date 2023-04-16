import classNames from 'classnames/bind';
import styles from '@/components/header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector, useAppDispatch } from '@/redux/hook';
import { handleOpenCart } from '@/redux/actions/app-action';
const cx = classNames.bind(styles);

const MobileHeader = () => {
    const dispath = useAppDispatch();
    const appConfig = useAppSelector((state) => state.appReducer);
    const { isCartOpen } = appConfig;
    const handleClickCartBtn = () => {
        console.log('first');
        dispath(handleOpenCart(!isCartOpen));
    };
    return (
        <div className={cx('mobile-wrapper')}>
            <div className={cx('menu-btn')}>
                <FontAwesomeIcon
                    icon={faBars}
                    fontSize={30}
                />
            </div>
            <Image
                src='/logotn.png'
                // className={cx('logo')}
                alt='SangTrongAuto'
                width='131'
                height='98'
            />
            <div
                className={cx('mobile-cart-btn')}
                onClick={() => handleClickCartBtn()}
            >
                <FontAwesomeIcon
                    icon={faShoppingBag}
                    fontSize={25}
                />
            </div>
        </div>
    );
};
export default MobileHeader;
