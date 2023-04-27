import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { ImDroplet, ImHome } from 'react-icons/im';
import { BsPeople } from 'react-icons/bs';

const links = [
    { id: 0, icon: <ImHome />, path: 'dashboard', text: 'home' },
    { id: 1, icon: <IoSettingsOutline />, path: 'settings', text: 'settings' },
    { id: 2, icon: <ImDroplet />, path: 'facts', text: 'facts' },
    { id: 3, icon: <BsPeople />, path: 'about', text: 'about' }
];

export default links;
