import React, { useState, Fragment } from 'react';
import { useAccessibilitySettings } from '../../context/accessibility';


export default function GardenPolicy() {
    const { accessibilitySettings } = useAccessibilitySettings();
    const { darkMode, textSize } = accessibilitySettings;

    return (
        <div className='py-6 px-8'>
            <h1 className={`${darkMode && "text-white"} ${textSize ? "text-2xl" : "text-xl"} underline leading-6 pb-2 mt-2`}>Garden Policy</h1>
            <p className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} my-4`}>
                All gardens installed by volunteers, partner organizations or contractors must submit detailed plans that include a site design, plant species, maintenance plan, funding sources and installation timelines. Plans must be submitted to the appropriate Operations Manager and, if applicable, the Facility Supervisor. Applications will be ﬁrst vetted at regional meetings and, if they are approved, the plant list will be reviewed by an Operations Manager. Once the application and plant list are approved the applicant will be given a Parks & Recreation work Permit, and can begin to install the garden.
            </p>
            <p className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} my-4`}>
                Safety will remain top priority in reviewing the plans. In particular, there must be assurances the proposed plants will not obstruct sightlines into the park. PP&R will also consider if new planting will encroach on other activities at the site. You must avoid planting anything that will grow into a fence, a gate or close to building foundations that can cause property damage. Do not plant anything that will overhang into pathways or sidewalks. Do not plant thorny plants near public walkways or any highly trafficked area that could potentially injure children or people using the space. Do not plant invasive species. Avoid plants that will spread outside of boundaries of the designated garden bed.
            </p>
            <p className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} my-4`}>
                The planting design will be evaluated based on the overall best use for the space and with consideration for neighbors and other user groups in mind.
            </p>
            <p className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} my-4`}>
                All plant material, once planted, becomes the property of the City of Philadelphia, under the jurisdiction of Philadelphia Parks and Recreation and therefore the department will dictate whether it remains or is removed over time.
            </p>
            <p className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} my-4`}>
                The plans must be legible and must include specific measurements, navigational coordinates and a plant list.
            </p>
        </div>
    )
};
