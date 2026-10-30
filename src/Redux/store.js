import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import productReducer from "./ProductSlice";



const store = configureStore({
    reducer:{
        userState:userReducer,
        productState:productReducer,                 //productState is the name assinging to productreducer in the store
    }
        
});
export default store;