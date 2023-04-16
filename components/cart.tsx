// 'use client';
import { useAppSelector, useAppDispatch } from '@/redux/hook';
import styles from './cart.module.scss';
import classNames from 'classnames/bind';
import { handleOpenCart } from '@/redux/actions/app-action';
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
                <h1 className={cx('title')}>Giỏ hàng</h1>
            </div>
        </div>
    );
};

export default Cart;
