import { useEffect, useState } from 'react';

import ArrowLeft from 'src/assets/ArrowLeft';
import Input from 'src/components/Input';
import NoCheckIcon from 'src/assets/NocheckIcon';
import ButtonGreen from 'src/components/ButtonGreen';

import { useForm } from 'react-hook-form';
import { AuthSchema, authSchema } from 'src/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import CheckedIcon from 'src/assets/checkedIcon';
import InfoUser from '../InfoUser';

import classNames from 'classnames/bind';
import styles from './RegisterStep.module.scss';
import Terms from '../Terms';
import useGetRegister from 'src/zustand/register.ztd';
const cx = classNames.bind(styles);

interface Props {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

export type FormData = Pick<AuthSchema, 'password'>;
const registerSchema = authSchema.pick(['password']);

const RegisterStep = ({ setStep, step }: Props) => {
    const { registerValue, setRegisterValue } = useGetRegister();
    const [isHadError, setIsHadErrored] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            password: '',
        },
        criteriaMode: 'all',
        mode: 'all',
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = handleSubmit((data) => {
        setRegisterValue(data);
        data && setStep((prev) => prev + 1);
    });

    const handleClickBack = () => {
        setStep((prev) => prev - 1);
    };

    useEffect(() => {
        errors.password && setIsHadErrored(true);
    }, [errors]);

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
                    <form onSubmit={onSubmit}>
                        {step === 1 && (
                            <div className={cx('box-password')}>
                                <div>
                                    <Input
                                        register={register}
                                        name="password"
                                        labelName="Password"
                                        type="password"
                                        autoComplete="new-password"
                                        errorsMessage={errors.password?.message}
                                    />
                                </div>

                                <div className={cx('box-validate')}>
                                    <h5 className={cx('title')}>Your password must contain at least</h5>
                                    <ul className={cx('validation')}>
                                        <li className={cx('condition')}>
                                            <div className={cx('condition-icon')}>
                                                {(errors.password?.types && !errors.password?.types?.matches) ||
                                                (isHadError && !errors.password?.types) ? (
                                                    <CheckedIcon />
                                                ) : (
                                                    <NoCheckIcon />
                                                )}
                                            </div>
                                            <span
                                                className={`${cx('condition-des')} ${
                                                    (errors.password?.types?.matches ||
                                                        errors.password?.types?.required) &&
                                                    cx('text-error')
                                                }`}
                                            >
                                                1 letter
                                            </span>
                                        </li>

                                        <li className={cx('condition')}>
                                            <div className={cx('condition-icon')}>
                                                {(errors.password?.types &&
                                                    !errors.password?.types?.specialCharsOrNumbers) ||
                                                (isHadError && !errors.password?.types) ? (
                                                    <CheckedIcon />
                                                ) : (
                                                    <NoCheckIcon />
                                                )}
                                            </div>
                                            <span
                                                className={`${cx('condition-des')} ${
                                                    (errors.password?.types?.specialCharsOrNumbers ||
                                                        errors.password?.types?.required) &&
                                                    cx('text-error')
                                                }`}
                                            >
                                                1 number or special character (example: # ? ! &)
                                            </span>
                                        </li>

                                        <li className={cx('condition')}>
                                            <div className={cx('condition-icon')}>
                                                {(errors.password?.types && !errors.password?.types?.min) ||
                                                (isHadError && !errors.password?.types) ? (
                                                    <CheckedIcon />
                                                ) : (
                                                    <NoCheckIcon />
                                                )}
                                            </div>
                                            <span
                                                className={`${cx('condition-des')} ${
                                                    (errors.password?.types?.min || errors.password?.types?.required) &&
                                                    cx('text-error')
                                                }`}
                                            >
                                                10 characters
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ButtonGreen type="submit">{'Next'}</ButtonGreen>
                                </div>
                            </div>
                        )}
                    </form>
                    {step === 2 && <InfoUser setStep={setStep} step={step} />}

                    {step === 3 && <Terms />}
                </div>
            </div>
        </div>
    );
};

export default RegisterStep;
