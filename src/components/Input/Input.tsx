import React, { InputHTMLAttributes } from 'react';
import type { UseFormRegister, RegisterOptions } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import ErrorIcon from 'src/assets/ErrorIcon';

const cx = classNames.bind(styles);

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    errorsMessage?: string;
    classNameInput?: string;
    classNameError?: string;
    classNameLabel?: string;
    classNameDes?: string;
    labelName?: string;
    classNameWrapInput?: string;
    register?: UseFormRegister<any>;
    rules?: RegisterOptions;
    description?: string;
}

const Input = ({
    register,
    className = 'box-input',
    errorsMessage,
    name,
    type = 'text',
    rules,
    autoComplete,
    classNameLabel = 'labelClassName',
    labelName,
    classNameInput = 'styleInput',
    classNameError = 'classNameError',
    classNameWrapInput = '',
    classNameDes = 'classNameDes',
    description = '',
    ...rest
}: Props) => {
    const registerResult = register && name ? register(name, rules) : null;

    return (
        <div className={cx(`${className}`)}>
            <div className={cx(`${classNameWrapInput}`)}>
                <label htmlFor={name} className={cx(`${classNameLabel}`)}>
                    {labelName}
                </label>
                {description && <span className={cx(classNameDes)}>{description}</span>}
                <input
                    type={type}
                    className={
                        !errorsMessage ? cx(`${classNameInput}`) : cx(`${classNameInput}`) + ' ' + cx(`inputError`)
                    }
                    {...registerResult}
                    {...rest}
                />
            </div>
            {errorsMessage && (
                <div className={cx(`${classNameError}`)}>
                    <div className={cx('errorIcon')}>
                        <ErrorIcon />
                    </div>
                    <span>Please enter your Spotify username or email address.</span>
                </div>
            )}
        </div>
    );
};

export default Input;
