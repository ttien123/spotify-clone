import GoogleIcon from 'src/assets/GoogleIcon';
import styles from './ButtonNormal.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface Props {
    children: React.ReactNode;
}

const ButtonNormal = ({ children }: Props) => {
    return (
        <button className={cx('wrapper')}>
            <span className={cx('logo')}>
                <GoogleIcon />
            </span>
            <span className={cx('content')}>{children}</span>
        </button>
    );
};

export default ButtonNormal;
