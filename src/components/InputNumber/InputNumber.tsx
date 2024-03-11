import { InputHTMLAttributes, forwardRef, useState } from 'react';

import styles from './InputNumber.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
    errorsMessage?: string;
    classNameInput?: string;
    classNameError?: string;
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(function InputNumberInner(
    {
        className,
        errorsMessage,
        autoComplete,
        classNameInput = 'classNameInput',
        classNameError = 'classNameError',
        onChange,
        value = '',
        ...rest
    },
    ref,
) {
    const [localValue, setLocalValue] = useState(value);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        // (/^\d+$/.test(value) || value === '') là để kiểm tra xem có phải là số hoặc "" không
        if (/^\d+$/.test(value) || value === '') {
            if (value.length <= 2 && Number(value) <= 32 && Number(value) >= 0) {
                console.log(value);
                onChange && onChange(event);
                setLocalValue(value);
            }
        }
    };
    return (
        <div className={cx(className)}>
            <input
                className={cx(classNameInput)}
                {...rest}
                value={value ? value : localValue}
                onChange={handleChange}
                ref={ref}
            />
            {errorsMessage && <div className={cx(classNameError)}>{errorsMessage}</div>}
        </div>
    );
});

export default InputNumber;
