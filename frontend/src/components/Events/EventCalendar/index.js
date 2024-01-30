import { useState } from "react"

export default function EventCalendar() {
    const [date, setDate] = useState(new Date())

    const onChange = (selectedDate) => {
        setDate(selectedDate);
    }

    const subHeaderClass = 'text-left underline underline-offset-8 tracking-widest xxs:text-md xs:text-lg sm:text-xl md:text-2xl lg:w-3xl xl:4xl my-8'

    return (
        <div>
            <h2 className={subHeaderClass} >Calendar</h2>
            <div>
                
            </div>
        </div>
    )
}
