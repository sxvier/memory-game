import React from 'react';
import './MemoryCard.css'
// import logo from './Logo.png'


class MemoryCard extends React.Component {
    render() {
        return (
            <div className="MemoryCard">
                <div className="logo">
                    <img alt="img" width="80px"
                        src="https://www.digitalcrafts.com/img/logo-wrench-white.png">
                    </img>
                </div>
            </div>
        );
    }
}

export default MemoryCard