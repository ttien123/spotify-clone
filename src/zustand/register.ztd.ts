import { FormData } from 'src/pages/Register/components/HomeRegister/HomeRegister';
import { AuthSchema } from 'src/utils/rules';
import { create } from 'zustand';

interface registerInterface {
    registerValue: AuthSchema;
    setRegisterValue: (body: FormData) => void;
}

const useGetRegister = create<registerInterface>()((set) => ({
    registerValue: {
        email: '',
        gender: '',
        password: '',
        date_of_birth: new Date(1990, 1, 1),
        name: '',
    },
    setRegisterValue: (body) =>
        set((state) => ({
            registerValue: {
                ...state.registerValue,
                ...body,
            },
        })),
}));

export default useGetRegister;
