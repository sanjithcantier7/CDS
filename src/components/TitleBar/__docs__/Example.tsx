import React from 'react';
import TitleBar, { ITitleBar } from '../TitleBar';
import { action } from '@storybook/addon-actions';

const Example: React.FC<ITitleBar> = ({ moduleOnclick, profileLogoutOnClick, version, home, notification, settings, info, profilePicture, profileRole, profileUserName, homeOnClick, settingsOnCLick }) => {
    return (
        <TitleBar
            version={version}
            home={home}
            notification={notification}
            settings={settings}
            info={info}
            profilePicture={profilePicture}
            profileUserName={profileUserName}
            profileRole={profileRole}
            homeOnClick={homeOnClick}
            settingsOnCLick={settingsOnCLick}
            moduleOnclick={moduleOnclick}
            profileLogoutOnClick={profileLogoutOnClick}
        />
    );
};

export default Example;
