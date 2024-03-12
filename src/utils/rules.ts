import * as yup from 'yup';

export const authSchema = yup.object({
    name: yup.string().max(160),
    gender: yup.string().required(),
    email: yup
        .string()
        .required("This email is invalid. Make sure it's written like example@email.com")
        .email("This email is invalid. Make sure it's written like example@email.com"),
    date_of_birth: yup.date().max(new Date(), 'Hãy chọn 1 ngày trong quá khứ'),
    password: yup
        .string()
        .required()
        .min(10)
        .matches(/[A-Za-z]/)
        .test({
            name: 'specialCharsOrNumbers',
            message: '',
            test: function (value) {
                if (/[0-9\W]/.test(value)) {
                    return true;
                } else {
                    return false;
                }
            },
        }),
});

export type AuthSchema = yup.InferType<typeof authSchema>;
