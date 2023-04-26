import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { ImDroplet, ImHome } from 'react-icons/im';
import { BsPeople } from 'react-icons/bs';

const links = [
    { id: 0, icon: <ImHome />, text: 'home' },
    { id: 1, icon: <IoSettingsOutline />, text: 'settings' },
    { id: 2, icon: <ImDroplet />, text: 'facts' },
    { id: 3, icon: <BsPeople />, text: 'about' }
];

export default links;
