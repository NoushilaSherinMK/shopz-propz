
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:JSON.parse(localStorage.getItem("products")) || [],
    cartItems:JSON.parse(localStorage.getItem("cartItems")) || [],
   
   
}




const productSlice = createSlice({
    name: "productslice",
    initialState,
    reducers:{
        addProduct:(state,action)=> {
            state.products.push(action.payload);
            localStorage.setItem("products",JSON.stringify(state.products));
        },
         updateProduct: (state, action) => {

            const index = state.products.findIndex(
                (product) => product.id === action.payload.id
            );

            if (index !== -1) {
                state.products[index] = action.payload;
            }
             localStorage.setItem(
            "products",
            JSON.stringify(state.products)
        );

        },


         deleteProduct: (state, action) => {

            const index = state.products.findIndex(
                (product) => product.id === action.payload
            );

            if (index !== -1) {
                state.products.splice(index,1)
            }
             localStorage.setItem(
            "products",
            JSON.stringify(state.products)
        );

        }
        
    }
});


export const {addProduct,updateProduct,deleteProduct} = productSlice.actions;
export default productSlice.reducer;
