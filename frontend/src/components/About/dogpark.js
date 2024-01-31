import React, { useState, Fragment } from 'react';
import { useAccessibilitySettings } from '../../context/accessibility';


export default function DogPark() {
    const { accessibilitySettings } = useAccessibilitySettings();
    const { darkMode, textSize } = accessibilitySettings;

    return (
        <div className="py-6 px-8">
            <h1 className={`${darkMode && "text-white"} ${textSize ? "text-2xl" : "text-xl"} underline leading-6 pb-2 mt-2`}>Dog Park Rules</h1>
            <p className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} my-4`}>Failure to abide by the park rules may result in loss of privileges. All visitors must be accompanied by a dog. Owners are fully responsible for the conduct of their dog(s).</p>
            <p className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} my-4`}>By entering the dog run, you agree to the following rules:</p>
            <ol className="list-decimal py-2 px-10">
                <li className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mb-4`}>Aggressive behavior will not be tolerated from dogs or owners. Dogs must be removed at the first sign of aggression.</li>

                <li className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mb-4`}>The following are prohibited in the park:
                    <ul className="list-disc pl-8">
                        <li>puppies under 4 months old,</li>
                        <li>dogs with contagious disease,</li>
                        <li>adult dogs that are not spayed or neutered.</li>
                    </ul>
                </li>

                <li className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mb-4`}>Handlers must maintain vocal and visual control over their dog(s).</li>

                <li className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mb-4`}>Food of any kind is prohibited. Small training treats are permitted when concealed and used responsibly.</li>

                <li className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mb-4`}>Unplug and Engage with your dog. For your dog's safety and enjoyment, please keep your phone and other electronic devices away while in the park. Engage and interact with your furry friend and other park-goers to create a positive social experience for all. Checking lottery results can wait until after your visit, but your dog's safety and happiness cannot.</li>

                <li className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mb-4`}>Three dogs maximum per handler. Handlers must remain in the run.</li>

                <li className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mb-4`}>Dogs in the run must be off leash, and dogs outside of the run must be on leash.</li>

                <li className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mb-4`}>All handlers must clean up the dog waste from their dog(s).</li>

                <li className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mb-4`}>Dogs must be licensed and vaccinated; tags must be worn at all times.</li>

                <li className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mb-4`}>Dog owners must be 18 years of age to enter. Anyone between 14 and 17 must be accompanied by an adult. No children under the age of 14 are permitted in the dog run.</li>
            </ol>
        </div>
    )
}
