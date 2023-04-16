import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import style from './scroll-top.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
const cx = classNames.bind(style);

const ScrollTop = ({ hide }: any) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    console.log(hide);
    return hide > 0 ? (
        <div
            className={cx('wrapper')}
            onClick={() => scrollToTop()}
        >
            <FontAwesomeIcon
                icon={faArrowUp}
                fontSize={30}
            />
        </div>
    ) : (
        <div className={cx('none')}></div>
    );
};

export default ScrollTop;
