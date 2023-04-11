import styles from '@/components/product-show.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
const cx = classNames.bind(styles);
import Image from 'next/image';
const ProductShow = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <h2 className={cx('title')}>{item.title}</h2>
                <div className={cx('right')}>
                    {item.option.map((item, index) => (
                        <Link
                            href={item.href}
                            key={index}
                            className={cx('option')}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={cx('content')}>
                {contents.map((item, index) => (
                    <div
                        className={cx('item')}
                        key={index}
                    >
                        <Image
                            src={item.link}
                            alt={item.title}
                            className={cx('img')}
                            width={332}
                            height={249}
                        />
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

const item = {
    title: 'Title of content',
    option: [
        {
            name: 'Option 1',
            href: '/',
        },
        {
            name: 'Option 2',
            href: '/',
        },
    ],
};
const contents = [
    {
        link: 'https://proauto.vn/wp-content/uploads/2022/10/do-ghe-limousine-xe-kia-carnival-2-1-400x300.jpg',
        title: 'Option 1',
    },
    {
        link: 'https://proauto.vn/wp-content/uploads/2022/10/do-led-noi-that-o-to-11-400x300.jpg',
        title: 'Option 1',
    },
    {
        link: 'https://proauto.vn/wp-content/uploads/2022/10/do-tran-anh-sao-xe-o-to-13-1-400x300.jpg',
        title: 'Option 1',
    },
    {
        link: 'https://proauto.vn/wp-content/uploads/2021/12/do-ghe-limousine-xe-lexus-lx570-1-400x300.jpg',
        title: 'Option 1',
    },
];
export default ProductShow;
