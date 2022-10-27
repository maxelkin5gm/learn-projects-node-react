import React, {FC} from 'react';

import arrow from "../img/arrow.svg";

interface BenefitCardProps {
    icon: any,
    title: string,
    description: string,
    hrefLearnMore: string
}

const BenefitCard: FC<BenefitCardProps> = ({icon, title, description, hrefLearnMore}) => {
    return (
        <div className="section2__card">
            <div className="section2__card-icon">
                <img src={icon} alt="icon"/>
            </div>

            <div className="section2__card-title">
                {title}
            </div>

            <div className="section2__card-description">
                {description}
            </div>

            <div className="link section2__card-link">
                <a href={hrefLearnMore}>LEARN MORE</a>
                <img src={arrow} alt="arrow"/>
            </div>
        </div>
    );
};

export default BenefitCard;