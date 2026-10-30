import { } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || [],
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false
}




const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        userRegister: (state, action) => {
            state.users.push(action.payload);
            localStorage.setItem("users", JSON.stringify(state.users));
        },
        userLogin: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("users", JSON.stringify(state.users));
            localStorage.setItem("isAuthenticated", JSON.stringify(state.isAuthenticated));
        },

        changeUserRole: (state, action) => {
            const userIndex = state.users.findIndex((u) => u.id === action.payload.id);
            if (userIndex !== -1) {
                state.users[userIndex].role = action.payload.role;
                localStorage.setItem("users", JSON.stringify(state.users)
                );
            }

            if (state.user && state.user.id === action.payload.id) {
                state.user.role = action.payload.role;
                localStorage.setItem("user", JSON.stringify(state.user)
                );

            }
        },

        userLogout: (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("user");
            localStorage.removeItem("isAuthenticated");
        },


        updateUser: (state, action) => {

            state.user.fullName = action.payload.fullname;
            state.user.email = action.payload.email;

            localStorage.setItem(
                "user",
                JSON.stringify(state.user)
            );
        },
        editUserProfile: (state, action) => {
            const index = state.users.findIndex(
                (user) => user.id === state.user.id
            );

            if (index !== -1) {
                state.users[index].fullname = action.payload.fullname;
                state.users[index].email = action.payload.email;
                localStorage.setItem("users", JSON.stringify(state.users));



                state.user.fullname = action.payload.fullname;
                state.user.email = action.payload.email;

                localStorage.setItem("user", JSON.stringify(state.user) );
            }
        },
    }
});


export const { userRegister, userLogin, changeUserRole, userLogout, updateUser, editUserProfile } = userSlice.actions;
export default userSlice.reducer;
