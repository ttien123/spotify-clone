import { useState } from 'react';

import ArrowLeft from 'src/assets/ArrowLeft';
import Input from 'src/components/Input';
import NoCheckIcon from 'src/assets/NocheckIcon';
import ButtonGreen from 'src/components/ButtonGreen';
import InputNumber from 'src/components/InputNumber';

import styles from './RegisterStep.module.scss';
import classNames from 'classnames/bind';
import listMonth from 'src/constants/listMonth';
import listGender from 'src/constants/listGender';
import { useNavigate } from 'react-router-dom';
import path from 'src/constants/path';
const cx = classNames.bind(styles);

const Terms = () => {
    return (
        <div className={cx('term')}>
            <div className={cx('term-container')}>
                <input id="term1" type="checkbox" className={cx('term-container-input')} />
                <label htmlFor={'term1'} className={cx('term-container-label')}>
                    <span className={cx('term-container-check')}></span>
                    <span className={cx('term-container-description')}>
                        I would prefer not to receive marketing messages from Spotify
                    </span>
                </label>
            </div>

            <div className={cx('term-container')}>
                <input id="term2" type="checkbox" className={cx('term-container-input')} />
                <label htmlFor={'term2'} className={cx('term-container-label')}>
                    <span className={cx('term-container-check')}></span>
                    <span className={cx('term-container-description')}>
                        I would prefer not to receive marketing messages from Spotify
                    </span>
                </label>
            </div>

            <div className={cx('more-term')}>
                <div className={cx('more-term-item')}>
                    By clicking on sign-up, you agree to Spotify's{' '}
                    <a href="#" className={cx('more-term-item-link')}>
                        Terms and Conditions of Use
                    </a>
                    .
                </div>

                <div className={cx('more-term-item')}>
                    To learn more about how Spotify collects, uses, shares and protects your personal data, please see{' '}
                    <a href="#" className={cx('more-term-item-link')}>
                        Spotify's Privacy Policy
                    </a>
                    .
                </div>
            </div>
        </div>
    );
};

const InfoUser = () => {
    const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    return (
        <>
            <div>
                <form>
                    <Input labelName="Name" type="text" description="This name will appear on your profile" />
                </form>

                <div className={cx('boxDate')}>
                    <div className={cx('boxDate-title')}>Date of birth</div>
                    <div className={cx('boxDate-des')}>Why do we need your date of birth? Learn more.</div>
                    <form>
                        <div className={cx('boxDate-container')}>
                            <div className={cx('boxDate-container-day')}>
                                <InputNumber placeholder="dd" />
                            </div>
                            <select
                                name="month"
                                value={'Month'}
                                className={cx('boxDate-container-month')}
                                onChange={() => null}
                            >
                                <option disabled>Month</option>
                                {listMonth.map((item) => (
                                    <option
                                        value={item.value}
                                        key={item.value}
                                        className={cx('boxDate-container-month-item')}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                            <div className={cx('boxDate-container-year')}>
                                <InputNumber placeholder="yyyy" />
                            </div>
                        </div>
                        <div className={cx('box-gender')}>
                            <div className={cx('boxDate-title')}>Gender</div>
                            <div className={cx('boxDate-des')}>
                                We use your gender to help personalize our content recommendations and ads for you..
                            </div>

                            <div className={cx('list-gender')}>
                                {listGender.map((item) => (
                                    <div className={cx('list-gender-item')} key={item.id}>
                                        <input
                                            id={item.value}
                                            type="radio"
                                            name="gender"
                                            className={cx('gender-input')}
                                            onChange={handleChangeGender}
                                            value={item.value}
                                        />
                                        <label htmlFor={item.value} className={cx('gender-label')}>
                                            <span className={cx('gender-check')}></span>
                                            <span className={cx('gender-value')}>{item.value}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

const RegisterStep = () => {
    const [step, setStep] = useState(1);
    const negative = useNavigate();

    const handleClick = () => {
        if (step < 3) {
            setStep((prev) => prev + 1);
        }

        if (step === 3) {
            console.log('abc');
        }
    };

    const handleClickBack = () => {
        if (step === 1) {
            negative(path.register);
        } else {
            setStep((prev) => prev - 1);
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('allProcess')}>
                <div className={cx('process')}></div>
            </div>

            <div className={cx('box-info')}>
                <button className={cx('box-arrow')} onClick={handleClickBack}>
                    <ArrowLeft />
                </button>
                <div className={cx('box-step')}>
                    <h4 className={cx('step')}>{`Step ${step} of 3`}</h4>
                    <h5 className={cx('step-info')}>
                        {step === 1
                            ? 'Create a password'
                            : step === 2
                            ? 'Tell us about yourself'
                            : 'Terms & Conditions'}
                    </h5>
                </div>
            </div>

            <div className={`flexCenter`}>
                <div className={cx('box-content')}>
                    {step === 1 && (
                        <>
                            <div>
                                <form>
                                    <Input labelName="Password" type="password" />
                                </form>
                            </div>

                            <div className={cx('box-validate')}>
                                <h5 className={cx('title')}>Your password must contain at least</h5>
                                <ul className={cx('validation')}>
                                    <li className={cx('condition')}>
                                        <div className={cx('condition-icon')}>
                                            <NoCheckIcon />
                                        </div>
                                        <span className={cx('condition-des')}>1 letter</span>
                                    </li>

                                    <li className={cx('condition')}>
                                        <div className={cx('condition-icon')}>
                                            <NoCheckIcon />
                                        </div>
                                        <span className={cx('condition-des')}>
                                            1 number or special character (example: # ? ! &)
                                        </span>
                                    </li>

                                    <li className={cx('condition')}>
                                        <div className={cx('condition-icon')}>
                                            <NoCheckIcon />
                                        </div>
                                        <span className={cx('condition-des')}>10 characters</span>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}

                    {step === 2 && <InfoUser />}

                    {step === 3 && <Terms />}

                    <div>
                        <ButtonGreen onClick={handleClick}>{step === 3 ? 'Sign up' : 'Next'}</ButtonGreen>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterStep;
