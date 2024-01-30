import React from 'react';


export default function Contact() {
    // var map = L.map('map').setView([39.9329856,-75.1670683], 13);

    return (
        <div>
            <h1>Contact</h1>
            <div>
                <div>
                    {/* <div id='map' className="h-full"></div> */}
                </div>
                <div>
                    <div>
                        <h1>Recreation Center Hours</h1>
                        <p>During the Fall, Winter, and Spring most centers operate between 2:00 PM and 10:00 PM. Some centers have limited hours on Saturdays.</p>
                    </div>
                    <div>
                        <h1>Contact Info</h1>
                        <div>
                            <ul>
                                <li>Columbus Square Park</li>
                                <li>Recreation Center</li>
                                <li>12th and Wharton</li>
                                <li>Philadelphia, PA 19147</li>
                            </ul>
                        </div>
                        <div>
                            <div className='text-white flex gap-3 mb-2 content-end items-center'>
                                <i class="fa-solid fa-phone"></i>
                                (215) 685-1590
                            </div>
                            <div className='text-white flex gap-3 mb-2 content-end items-center'>
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
