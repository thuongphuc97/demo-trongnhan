// 'use client';
import { useAppSelector, useAppDispatch } from '@/redux/hook';
import styles from './cart.module.scss';
import classNames from 'classnames/bind';
import { handleOpenCart } from '@/redux/actions/app-action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

interface CartProps {
    open: boolean;
}

const Cart = () => {
    const appConfig = useAppSelector((state) => state.appReducer);
    const dispath = useAppDispatch();
    const { isCartOpen } = appConfig;
    const handleClickCartBtn = () => {
        dispath(handleOpenCart(!isCartOpen));
    };

    return (
        <div className={isCartOpen ? cx('overlay') : cx('overlay-close')}>
            <div
                onClick={() => handleClickCartBtn()}
                className={cx('transparent')}
            />
            <div className={cx('wrapper')}>
                <div className={cx('row')}>
                    <div
                        className={cx('close-button')}
                        onClick={() => handleClickCartBtn()}
                    >
                        <FontAwesomeIcon
                            icon={faClose}
                            fontSize={30}
                        />
                    </div>
                    <h1 className={cx('title')}>Giỏ hàng</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;
