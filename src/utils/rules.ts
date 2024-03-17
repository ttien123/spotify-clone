import * as yup from 'yup';

export const authSchema = yup.object({
    name: yup.string().max(160).required('Enter a name for your profile.'),
    gender: yup.string().required(),
    email: yup
        .string()
        .required("This email is invalid. Make sure it's written like example@email.com")
        .email("This email is invalid. Make sure it's written like example@email.com"),
    password: yup
        .string()
        .required('isRequired')
        .matches(/[A-Za-z]/, '1 letter')
        .min(10, '10 characters')
        .test({
            name: 'specialCharsOrNumbers',
            message: '1 number or special character (example: # ? ! &)',
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
