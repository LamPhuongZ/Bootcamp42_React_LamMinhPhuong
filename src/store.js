import { configureStore } from "@reduxjs/toolkit";
import sticketsReducer from "./reducers/sticketsReducer";


// Tạo redux store nắm giữ state của ứng dụng
const store = configureStore ({
    reducer: {
        sticketsReducer: sticketsReducer,
    }
});

export default store;