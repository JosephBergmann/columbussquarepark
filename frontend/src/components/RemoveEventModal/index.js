import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition, Switch, Tab } from '@headlessui/react';
import {useDispatch} from 'react-redux'
import { useEventForm } from '../../context/eventForm';
import { removeEvent } from '../../store/events';

export default function RemoveEventModal() {
    const dispatch = useDispatch()
    const {
        showRemoveEvent,
        setShowRemoveEvent,
        removeEventId,
    } = useEventForm()

    const handleRemove = async () => {
        // remove event
         const data = await dispatch(removeEvent(removeEventId))
         if(data.errors) {

         } else {
            setShowRemoveEvent(false)
         }
    }

    return (
        <Transition appear show={showRemoveEvent} as={Fragment}>
            <Dialog as="div" className="fixed z-100" onClose={() => setShowRemoveEvent(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className={`bg-white w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all`}>
                        <Dialog.Title
                            as="h1"
                            className="leading-6 text-gray-900 text-xl"
                        >
                            Remove Event
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className={`text-sm text-gray-500`}>
                                Are you sure you want to remove this event?
                            </p>
                        </div>
                        <div className="mt-4">
                            <div className='flex flex-col justify-center'>
                                <button onClick={handleRemove} className='mt-4 py-3 px-8 bg-secondary rounded-xl active:bg-gray-300'>
                                    Yes, remove event
                                </button>
                                <button onClick={() => setShowRemoveEvent(false)} className='mt-4 py-3 px-8 bg-secondary rounded-xl active:bg-gray-300'>
                                    No, do not remove
                                </button>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </div>
            </Dialog>
        </Transition>
    )
}
