import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData"

const userInfor = fetchUser()
const cartInfor = fetchCart()
export const initialState = {
    user: userInfor,
    foodItems: null,
    isOn:true,
    cartShow: false,
    cartItems: cartInfor
}