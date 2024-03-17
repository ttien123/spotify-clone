import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './InfoUser.module.scss';
const cx = classNames.bind(styles);

import Input from 'src/components/Input';
import InputNumber from 'src/components/InputNumber';
import listGender from 'src/constants/listGender';
import listMonth from 'src/constants/listMonth';
import { AuthSchema, authSchema } from 'src/utils/rules';
import useGetRegister from 'src/zustand/register.ztd';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ButtonGreen from 'src/components/ButtonGreen';
import ErrorIcon from 'src/assets/ErrorIcon';

interface Props {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

export type FormData = Pick<AuthSchema, 'name' | 'gender'>;
const registerSchema = authSchema.pick(['name', 'gender']);

const InfoUser = ({ setStep }: Props) => {
    const { registerValue, setRegisterValue } = useGetRegister();

    const date = new Date(registerValue.date_of_birth);

    const [day, setDay] = useState<string | number>(date.getDate() || '');
    const [month, setMonth] = useState<string | number>(date.getMonth() || '');
    const [year, setYear] = useState<string | number>(date.getFullYear() || '');
    const [isErrorDate, setIsErrorDate] = useState(false);
    const [isErrorGender, setIsErrorGender] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            name: '',
            gender: '',
        },
        criteriaMode: 'all',
        mode: 'all',
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = handleSubmit((data) => {
        setRegisterValue(data);
        setRegisterValue({ date_of_birth: new Date(Number(year), Number(month), Number(day)) });
        setStep((prev) => prev + 1);
    });

    const handleClickNext = () => {
        if (!day || !month || !year) {
            setIsErrorDate(true);
        }
    };

    const onChangeDate =
        (methods: React.Dispatch<React.SetStateAction<string | number>>) =>
        (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
            methods(e.target.value);
        };

    const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterValue({ gender: e.target.value });
        setIsErrorGender(true);
        setValue('gender', e.target.value);
    };

    useEffect(() => {
        if (day && month && year) {
            setIsErrorDate(false);
        }
    }, [day, month, year]);

    useEffect(() => {
        registerValue.name && setValue('name', registerValue.name);
    }, []);

    return (
        <div className={cx('box-infoUser')}>
            <form onSubmit={onSubmit}>
                <Input
                    name="name"
                    register={register}
                    labelName="Name"
                    isShowError
                    errorsMessage={errors.name?.message}
                    type="text"
                    description="This name will appear on your profile"
                />
                <div className={cx('boxDate')}>
                    <div className={cx('boxDate-title')}>Date of birth</div>
                    <div className={cx('boxDate-des')}>Why do we need your date of birth? Learn more.</div>
                    <div className={cx('boxDate-container')}>
                        <div className={cx('boxDate-container-day')}>
                            <InputNumber value={day} placeholder="dd" name="day" onChange={onChangeDate(setDay)} />
                        </div>
                        <select
                            name="month"
                            value={month}
                            className={cx('boxDate-container-month')}
                            onChange={onChangeDate(setMonth)}
                        >
                            <option disabled value={''}>
                                Month
                            </option>
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
                            <InputNumber
                                placeholder="yyyy"
                                value={year}
                                name="year"
                                onChange={onChangeDate(setYear)}
                                lengthNumber={4}
                            />
                        </div>
                    </div>

                    {isErrorDate && (
                        <div className={cx('error-date')}>
                            <div className={cx('errorIcon')}>
                                <ErrorIcon />
                            </div>
                            <span>{'Please enter your date of birth.'}</span>
                        </div>
                    )}

                    <div className={cx('box-gender')}>
                        <div className={cx('boxDate-title')}>Gender</div>
                        <div className={cx('boxDate-des')}>
                            We use your gender to help personalize our content recommendations and ads for you..
                        </div>

                        <div className={cx('list-gender')}>
                            {listGender.map((item) => (
                                <div className={cx('list-gender-item')} key={item.id}>
                                    <input
                                        checked={registerValue.gender === item.value}
                                        id={item.value}
                                        {...register('gender')}
                                        name="gender"
                                        type="radio"
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

                        {errors.gender?.message && !isErrorGender && (
                            <div className={cx('error-date')}>
                                <div className={cx('errorIcon')}>
                                    <ErrorIcon />
                                </div>
                                <span>{errors.gender?.message}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <ButtonGreen
                        type={day && month && year ? 'submit' : 'button'}
                        onClick={!(day && month && year) ? handleClickNext : undefined}
                    >
                        Next
                    </ButtonGreen>
                </div>
            </form>
        </div>
    );
};

export default InfoUser;
