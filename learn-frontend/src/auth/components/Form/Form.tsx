import React, {FC} from 'react';

import cl from './Form.module.scss'


interface FormProps {
    children: React.ReactNode
}

const Form: FC<FormProps> = ({children}) => {
    return (
        <form className={cl.form} onSubmit={e => e.preventDefault()}>
            {children}
        </form>
    );
};

export default Form;