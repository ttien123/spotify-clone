import Input from 'src/components/Input';
import styles from './HomeRegister.module.scss';
import classNames from 'classnames/bind';
import ButtonText from 'src/components/ButtonText';
import ButtonGreen from 'src/components/ButtonGreen';
import ButtonNormal from 'src/components/ButtonNormal';
import path from 'src/constants/path';
import { useForm } from 'react-hook-form';
import { AuthSchema, authSchema } from 'src/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import useGetRegister from 'src/zustand/register.ztd';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

interface Props {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

export type FormData = Pick<AuthSchema, 'email'>;
const registerSchema = authSchema.pick(['email']);

const HomeRegister = ({ setStep }: Props) => {
    const { registerValue, setRegisterValue } = useGetRegister();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            email: '',
        },
        mode: 'all',
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = handleSubmit((data) => {
        setRegisterValue(data);
        setStep((prev) => prev + 1);
    });

    useEffect(() => {
        registerValue.email && setValue('email', registerValue.email);
    }, []);

    return (
        <div className={cx('container')}>
            <h1>Sign up to start listening</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <Input
                        className=""
                        labelName="Email address"
                        isShowError
                        placeholder="name@domain.com"
                        register={register}
                        name="email"
                        errorsMessage={errors.email?.message}
                    />
                </div>
                <div style={{ marginTop: '8px' }}>
                    <ButtonText type="button" textGreen>
                        Use phone number instead.
                    </ButtonText>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <ButtonGreen type="submit">Next</ButtonGreen>
                </div>
            </form>

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
