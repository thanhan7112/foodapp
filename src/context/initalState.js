import { fetchUser } from "../utils/fetchLocalStorageData"

const userInfor = fetchUser()

export const initialState = {
    user: userInfor,
    foodItems: null,
    isOn:true,
    cartShow: false
}