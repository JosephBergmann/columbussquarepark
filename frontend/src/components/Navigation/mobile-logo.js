import logo from './csp-logo.gif'

export default function MobileLogo() {

    return (
        <div className="bg-transparent flex gap-2">
            <img src={logo} className='min-h-min size-20'/>
            <div className='flex flex-col justify-center gap-0'>
                <div>Columbus</div>
                <div>Square</div>
                <div>Park</div>
            </div>
        </div>
    )
}
