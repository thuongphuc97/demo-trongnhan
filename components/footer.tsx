import styles from '@/components/footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const imgLink =
    'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80';
const Footer = () => {
    return (
        <div
            className={cx('wrapper')}
            style={{
                backgroundImage: `url(${imgLink})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <p>This is footer</p>
        </div>
    );
};

export default Footer;
