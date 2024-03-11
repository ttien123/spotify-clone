import styles from './ButtonGreen.module.scss';
import classNames from 'classnames/bind';
import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string;
    href?: string;
    extendClassName?: string;
}

const ButtonGreen = ({ href, type = 'button', extendClassName, to, onClick, children, ...rest }: Props) => {
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
        <Comp href={href} className={`${cx('buttonSubmit')} ${extendClassName && cx(extendClassName)}`} {...prop}>
            {children}
        </Comp>
    );
};

export default ButtonGreen;
