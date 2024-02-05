


export default function ImageCard({image}) {

    return (
        <>
            <img className='px-2 w-auto aspect-[4/3] sm:px-0 sm:min-w-60 sm:max-w-72 rounded-sm
            ' src={image}/>
        </>
    )
}
