import styles from '@/components/widgets/contact.module.scss';
import { faMessage, faPhone, faZ } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const ContactWidget = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faZ} />
                </div>
                <span>Zalo</span>
            </div>
            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                Gọi ngay
            </div>
            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faMessage} />
                </div>
                FB
            </div>
        </div>
    );
};
export default ContactWidget;
