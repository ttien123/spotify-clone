import { ReactNode } from 'react';
import styles from './AuthLayout.module.scss';
import classNames from 'classnames/bind';
import Logo from 'src/assets/Logo';
const cx = classNames.bind(styles);

const { Header, Content } = Layout;

import { Layout } from 'antd';
const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Header className={cx('header')}>
                <div className={cx('logo')}>
                    <Logo />
                </div>
            </Header>
            <Content style={{ color: 'white' }}>{children}</Content>
        </Layout>
    );
};

export default AuthLayout;
