import React, {FC, HTMLInputTypeAttribute} from 'react';

import cl from './InputForm.module.scss'


interface InputFormProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    type?: HTMLInputTypeAttribute
}

const InputForm: FC<InputFormProps> = ({onChange, value, placeholder, type = "text"}) => {
    return (
        <input className={cl.inputForm}
               placeholder={placeholder}
               type={type}
               value={value}
               onChange={e => onChange(e.target.value)}
        />
    );
};

export default InputForm;