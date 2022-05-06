import React from 'react';

interface IPunkyDexCardProps {
    image: string;
    title: string;
    description: string;
}

const PunkyDexCard:React.FC<IPunkyDexCardProps> = ({image, title, description}) => {
    return <div className="component-punkydex-card">
        <img className="component-punkydex-card__image" src={image} alt="punkydex-card"/>
        <div className="component-punkydex-card__title">{title}</div>
        <div className="component-punkydex-card__description">{description}</div>
    </div>
}

export default PunkyDexCard