import {configureStore} from "@reduxjs/toolkit";
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer";
import { courseReducer } from "./reducers/courseReducer";
import { otherReducer } from "./reducers/otherReducer";
import { adminReducer } from "./reducers/adminReducer";


const store = configureStore({
    reducer:{
        user: userReducer,
        profile:profileReducer,
        course:courseReducer,
        subscription:subscriptionReducer,
        other:otherReducer,
        admin:adminReducer,
    }
});

export default store;

export const server = "https://coursify-backend.vercel.app/api/v1";
