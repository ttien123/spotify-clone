import styles from './Register.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Outlet } from 'react-router-dom';
const Register = () => {
    return (
        <div className={cx('box')}>
            <Outlet />
            <div className={cx('footer-login')}>
                This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and
                <a href="#">Terms of Service</a> apply.
            </div>
        </div>
    );
};

export default Register;
