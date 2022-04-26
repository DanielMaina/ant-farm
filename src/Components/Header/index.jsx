import React from 'react';

import './header.css';


function Header({ balance }) {
    return (
        <div id='header'>
            <div className='logo-amount-rewards'>
                <div className='logo-icon' />
                <div>
                    <div className='header-aphids-amount-conainer'>
                        <div className='header-aphids-amount'>{balance} Aphids</div>
                    </div>
                    <div className='header-aphids-rewards'>
                        Rewards: <div className='header-aphids-reward-amount'>+ 0 BNB</div>
                    </div>
                </div>
            </div>
            <button className='connect'>Connect</button>
        </div>
    );
}

export default Header;