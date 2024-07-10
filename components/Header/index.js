import './index.css'
import { updateTheme } from '../../store/themeSlice'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer.cart)
    console.log('cart', cart)
    return <div className='header'>
        <div className="red box" onClick={() => dispatch(updateTheme('red'))}></div>
        <div className="green box" onClick={() => dispatch(updateTheme('green'))}></div>
        <div className="blue box" onClick={() => dispatch(updateTheme('blue'))}></div>

        <p>{cart.length}</p>
        <img
            src="https://www.freeiconspng.com/uploads/green-shopping-cart-icon-5.png"
            width="50"
            height="50"
        />

        <div>
            {cart.map(item => {
                return <div>
                    <h3>
                        <img src={item.image} width="20" height="20" /> {item.title} - Rs. {item.amount}
                    </h3>
                </div>
            })}
        </div>
    </div>
}

export default Header