import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface KrishleAppProps extends WindowAppProps {}

const KrishleApp: React.FC<KrishleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="Krishle"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default KrishleApp;
