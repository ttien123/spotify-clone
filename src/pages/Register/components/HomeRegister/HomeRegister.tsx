import Input from 'src/components/Input';
import styles from './HomeRegister.module.scss';
import classNames from 'classnames/bind';
import ButtonText from 'src/components/ButtonText';
import ButtonGreen from 'src/components/ButtonGreen';
import ButtonNormal from 'src/components/ButtonNormal';
import path from 'src/constants/path';
const cx = classNames.bind(styles);
const HomeRegister = () => {
    return (
        <div className={cx('container')}>
            <h1>Sign up to start listening</h1>
            <div>
                <Input className="" labelName="Email address" placeholder="name@domain.com" />
            </div>
            <div style={{ marginTop: '8px' }}>
                <ButtonText textGreen>Use phone number instead.</ButtonText>
            </div>

            <div style={{ marginTop: '20px' }}>
                <ButtonGreen to={path.registerInfo}>Next</ButtonGreen>
            </div>

            <div className={cx('box-line')}>
                <span className={cx('text-line')}>or</span>
            </div>

            <div>
                <ButtonNormal>Sign up with google</ButtonNormal>
                <ButtonNormal>Sign up with google</ButtonNormal>
                <ButtonNormal>Sign up with google</ButtonNormal>
            </div>

            <hr className={cx('line-long')} />

            <div className={cx('linkToSignUp')}>
                <span>Already have an account?</span>
                <ButtonText to={path.login}>Log in here.</ButtonText>
            </div>
        </div>
    );
};

export default HomeRegister;
