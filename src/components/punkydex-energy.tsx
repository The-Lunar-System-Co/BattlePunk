import React from 'react';

interface IPunkyDexEnergyProps {
    selected: boolean;
    icon: string;
    title: string;
}

const PunkyDexEnergy:React.FC<IPunkyDexEnergyProps> = ({selected, icon, title}) => {
    return <div className="component-punkydex-energy">
        <img className="component-punkydex-energy__icon" src={icon} alt="energy-logo" />
        <div className="component-punkydex-energy__title">{title}</div>
    </div>
}

export default PunkyDexEnergy;