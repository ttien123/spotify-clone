import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const MainLayout = () => {
    return (
        <div className={cx('wrapper')}>
            <div>MainLayout</div>
            <Outlet />
        </div>
    );
};

export default MainLayout;
