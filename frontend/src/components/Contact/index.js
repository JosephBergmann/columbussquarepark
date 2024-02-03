import React, { useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useAccessibilitySettings } from '../../context/accessibility';
import { useNavigation } from '../../context/navigation';

export default function Contact() {
    const { accessibilitySettings, headerFormat, subheaderFormat, contentFormat } = useAccessibilitySettings();
    const { darkMode, textSize, textSpacing } = accessibilitySettings;
    const { setPage } = useNavigation();

    useEffect(() => {
        setPage('contact')
    }, [])

    return (
        <div className='mt-10 mb-36'>
            <h1 className={`${headerFormat} underline ${textSpacing ? "underline-offset-4" : "underline-offset-1"} leading-6 pb-8 pl-10 md:pl-0`}>Contact</h1>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-10'>
                <div className={`hidden md:flex ${darkMode ? "z-0" : "-z-10"}`}>
                    <MapContainer center={[39.9329856,-75.1650]} zoom={17} style={{ height: '560px', width: '100%', zIndex: '0', }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </MapContainer>
                </div>
                <div className='flex flex-col justify-evenly px-10'>
                    <div className='py-5'>
                        <h1 className={`${subheaderFormat} underline ${textSpacing ? "underline-offset-4" : "underline-offset-1"} leading-6 pb-4`}>Recreation Center Hours</h1>
                        <p className={contentFormat}>During the Fall, Winter, and Spring most centers operate between 2:00 PM and 10:00 PM. Some centers have limited hours on Saturdays.</p>
                    </div>
                    <div className='py-5'>
                        <h1 className={`${subheaderFormat} underline ${textSpacing ? "underline-offset-4" : "underline-offset-1"} leading-6 pb-6`}>Contact Info</h1>
                        <div className='mb-6'>
                            <ul>
                                <li className={`${contentFormat} font-bold`}>Columbus Square Park</li>
                                <li className={`${contentFormat}`}>Recreation Center</li>
                                <li className={`${contentFormat}`}>12th and Wharton</li>
                                <li className={`${contentFormat}`}>Philadelphia, PA 19147</li>
                            </ul>
                        </div>
                        <div>
                            <div className={`flex gap-3 mb-2 content-end items-center ${contentFormat}`}>
                                <i class="fa-solid fa-phone"></i>
                                (215) 685-1590
                            </div>
                            <div className={`flex gap-3 mb-2 content-end items-center ${contentFormat}`}>
                                <i class="fa-solid fa-envelope"></i>
                                info@mycolumbussquarepark.org
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
