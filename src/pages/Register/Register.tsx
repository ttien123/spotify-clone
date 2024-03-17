import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
const cx = classNames.bind(styles);
import HomeRegister from './components/HomeRegister';
import RegisterStep from './components/RegisterStep';
import useGetRegister from 'src/zustand/register.ztd';
const Register = () => {
    const [step, setStep] = useState(0);
    const { registerValue, setRegisterValue } = useGetRegister();
    console.log(registerValue);

    return (
        <div className={cx('box')}>
            {step === 0 && <HomeRegister setStep={setStep} />}
            {step > 0 && <RegisterStep setStep={setStep} step={step} />}
            <div className={cx('footer-login')}>
                This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and
                <a href="#">Terms of Service</a> apply.
            </div>
        </div>
    );
};

export default Register;
