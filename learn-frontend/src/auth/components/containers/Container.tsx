import React, {FC} from 'react';

import cl from './Container.module.scss'


interface ContainerProps  {
    children: React.ReactNode
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={cl.container}>
            {children}
        </div>
    );
};

export default Container;