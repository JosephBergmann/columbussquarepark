import logo from './csp-logo.gif'

export default function MobileLogo() {

    return (
        <div className="bg-transparent flex gap-2">
            <img src={logo} className='min-h-min size-20'/>
            <div className='flex flex-col justify-center gap-0'>
                <div className='font-newspaper'>Columbus</div>
                <div className='font-newspaper'>Square</div>
                <div className='font-newspaper'>Park</div>
            </div>
        </div>
    )
}
