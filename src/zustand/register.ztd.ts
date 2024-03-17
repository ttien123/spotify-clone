import { AuthSchema } from 'src/utils/rules';
import { create } from 'zustand';

interface registerValueInterface extends AuthSchema {
    date_of_birth: Date | '';
}

interface registerInterface {
    registerValue: registerValueInterface;
    setRegisterValue: (body: Partial<AuthSchema> | { date_of_birth: Date }) => void;
}

const useGetRegister = create<registerInterface>()((set) => ({
    registerValue: {
        email: '',
        gender: '',
        password: '',
        date_of_birth: '',
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
