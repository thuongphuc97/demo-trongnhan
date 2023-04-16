import styles from '@/components/widgets/contact.module.scss';
import { faMessage, faPhone, faZ } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { MobileOnlyView, isMobile } from 'react-device-detect';
const cx = classNames.bind(styles);

const ContactWidget = () => {
    const fbLink = 'http://m.me/fuc.ryu/';
    const zaloLink = 'https://zalo.me/0352427479';
    return (
        <div className={cx('wrapper')}>
            <Link
                className={cx('item')}
                href={zaloLink}
            >
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faZ} />
                </div>
                <span className={cx('text')}>Zalo</span>
            </Link>
            <Link
                className={cx('item')}
                href={'tel:900'}
            >
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <span className={cx('text')}>Gọi ngay</span>
            </Link>
            <Link
                className={cx('item')}
                href={fbLink}
            >
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faMessage} />
                </div>
                <span className={cx('text')}>Messenger</span>
            </Link>
        </div>
    );
};
export default ContactWidget;
