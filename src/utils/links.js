import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { ImHome } from 'react-icons/im';
import { BsPeople } from 'react-icons/bs';

const links = [
    { id: 0, icon: <ImHome />, path: 'dashboard', text: 'STRONA GŁÓWNA' },
    { id: 1, icon: <IoSettingsOutline />, path: 'settings', text: 'USTAWIENIA' },
    { id: 2, icon: <BsPeople />, path: 'about', text: 'O NAS' }
];

export default links;
