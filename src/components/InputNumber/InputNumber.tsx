import { InputHTMLAttributes, forwardRef, useState } from 'react';

import styles from './InputNumber.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
    errorsMessage?: string;
    classNameInput?: string;
    classNameError?: string;
    lengthNumber?: number;
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
        lengthNumber = 2,
        ...rest
    },
    ref,
) {
    const [localValue, setLocalValue] = useState(value);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        // (/^\d+$/.test(value) || value === '') là để kiểm tra xem có phải là số hoặc "" không
        if (/^\d+$/.test(value) || value === '') {
            if (value.length <= lengthNumber) {
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
