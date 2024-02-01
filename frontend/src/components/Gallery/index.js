import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ImageCard from '../ImageCard'


export default function Gallery() {
    const user = useSelector(state => state.session.user)
    const [images, setImages] = useState([])

    // const accessToken = process.env.REACT_APP_ACCESS_TOKEN
    const accessToken = ''
    // console.log('accessToken', accessToken)
    // const instaUser = process.env.INSTA_USER_ID
    const instaUser = ''
    const mediaUrl = `https://graph.instagram.com/${instaUser}/media?access_token=${accessToken}`
    const imageUrl = `https://graph.instagram.com/?fields=media_url,permalink,caption&access_token=${accessToken}`

    // useEffect(() => {
    //     const getImages = async () => {

    //         const fetchMedia = async (url) => {
    //             const res = await fetch(url)
    //             const json = await res.json()
    //             return json.data //array of objects with 'id': ###
    //         }
    //         const media = await fetchMedia(mediaUrl)

    //         const fetchImageUrl = async (url) => {
    //             const res = await fetch(url)
    //             const json = await res.json()
    //             return json.media_url
    //         }
    //         const imageUrlArray = []
    //         for (let image of media){
    //             const imageId = image.id
    //             const imageUrl = `https://graph.instagram.com/${imageId}?fields=media_url,permalink,caption&access_token=${accessToken}`

    //             const imageInfo = await fetchImageUrl(imageUrl)
    //             console.log(imageInfo)
    //             imageUrlArray.push(imageInfo)
    //         }

    //         console.log(imageUrlArray)
    //         return imageUrlArray
    //     }

    //     const imagesArray = getImages()
    //     setImages(imagesArray)

    // }, [])

    const subHeaderClass = 'text-left underline underline-offset-8 tracking-widest xxs:text-md xs:text-lg sm:text-xl md:text-2xl lg:w-3xl xl:4xl my-8'

    if (!images.length) {
        return null
    }

    const imagesMap = images.map(image => {
        return (
            <>
                <ImageCard image={image} />
            </>
        )
    })

    return (
        <div className="flex gap-16">
            <div>
                <div className="flex justify-between gap-8">
                    <h2 className={subHeaderClass} >Gallery</h2>
                </div>
                <div>
                    {imagesMap}
                </div>
            </div>
        </div>
    )
}
