import React from 'react';

interface IMobileNavItem {
    isComingSoon?: boolean;
}

const MobileNavItem:React.FC<IMobileNavItem> = ({isComingSoon, children}) => {
    return <div className="component-mobile-nav-item">
        <div>{children}</div>
        {isComingSoon && <div>Coming Soon</div>}
    </div>
}

export default MobileNavItem