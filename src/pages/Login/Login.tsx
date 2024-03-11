import ButtonNormal from 'src/components/ButtonNormal';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Input from 'src/components/Input';
const cx = classNames.bind(styles);
import { Switch, Button } from 'antd';
import { Link } from 'react-router-dom';
import path from 'src/constants/path';
import ButtonGreen from 'src/components/ButtonGreen';
import ButtonText from 'src/components/ButtonText';

const Login = () => {
    const onChange = (checked: boolean) => {
        console.log(checked);
    };

    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <h1 className={cx('title')}>Log in to Spotify</h1>
                        <div className={cx('box-auth-social')}>
                            <ButtonNormal>Continue with Google</ButtonNormal>
                            <ButtonNormal>Continue with Google</ButtonNormal>
                            <ButtonNormal>Continue with Google</ButtonNormal>
                            <ButtonNormal>Continue with Google</ButtonNormal>
                        </div>
                        <hr className={cx('line')} />
                        <form action="">
                            <div className={cx('form-box')}>
                                <Input placeholder="Email or username" labelName="Email or username" />
                                <Input placeholder="Password" labelName="Password" />
                                <div className={cx('switch-login')}>
                                    <Switch
                                        defaultChecked
                                        onChange={onChange}
                                        className={cx('checkBoxClassName')}
                                        size="small"
                                    />
                                    <span>Remember me</span>
                                </div>

                                <div style={{ padding: '32px 0' }}>
                                    <ButtonGreen>Login</ButtonGreen>
                                </div>
                            </div>
                        </form>

                        <div style={{ textAlign: 'center' }}>
                            <ButtonText>Forgot your password?</ButtonText>
                        </div>

                        <hr className={cx('line')} />

                        <div className={cx('linkToSignUp')}>
                            <span>Don't have an account?</span>
                            <ButtonText to={path.register}>Sign up for Spotify</ButtonText>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-login')}>
                This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and{' '}
                <a href="#">Terms of Service</a> apply.
            </div>
        </div>
    );
};

export default Login;
