import React, {FC} from 'react';

import cl from './ButtonForm.module.scss'

interface ButtonFormProps {
    name: string
    onClick?: () => void
}

const ButtonForm: FC<ButtonFormProps> = ({name, onClick}) => {
    return (
        <button className={cl.buttonForm} onClick={onClick}>{name}</button>
    );
};

export default ButtonForm;