import React, { ButtonHTMLAttributes } from 'react';
import styles from './ButtonText.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string;
    href?: string;
    textGreen?: boolean;
    extendClassName?: string;
}

const ButtonText = ({ href, type = 'button', textGreen, extendClassName, to, onClick, children, ...rest }: Props) => {
    let Comp: any = 'button';

    const prop: Omit<Props, 'children'> = {
        onClick,
        ...rest,
    };

    if (to) {
        prop.to = to;
        Comp = Link;
    } else if (href) {
        prop.href = href;
        Comp = 'a';
    }
    return (
        <Comp
            type={type}
            {...prop}
            className={`${cx('textWhite')} ${textGreen && cx('textGreen')} ${extendClassName && cx(extendClassName)}`}
        >
            {children}
        </Comp>
    );
};

export default ButtonText;
