import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
    const myRefDiv = useRef(null);
    const [vanta, setVanta] = useState(0);
    
    useEffect(() => {
        if(!vanta){
            setVanta(1)
            console.log('Vanta initializate');
            Clouds({
                THREE,
                el: myRefDiv.current
            })
        }
        return () => {
            if (vanta) {
                // vanta.destroy();
                console.log('libero los recursos')
            }
        }
    }, [vanta]);

    return (
        <div className="full" ref={myRefDiv}>
            { children }
        </div>
    );
};

WelcomeScreen.propTypes = {
    children: PropTypes.node
};

export default WelcomeScreen;