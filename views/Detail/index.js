import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateCart } from '../../store/cartSlice'
import { getSingleProduct } from '../../config/firebase'

function Detail() {
    const dispatch = useDispatch()
    const [ad, setAd] = useState({})
    const { adId } = useParams()

    useEffect(() => {
        getSingleAd()
    }, [])

    const getSingleAd = async () => {
        const res = await getSingleProduct(adId)
        setAd(res)
    }

    const addToCart = () => {
        console.log('ad', ad)
        dispatch(updateCart(ad))
    }

    return <div>
        <h1>Detail</h1>

        <h1>{ad.title}</h1>

        <button onClick={addToCart}>Add to Cart</button>
    </div>
}

export default Detail