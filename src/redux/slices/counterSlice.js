import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

// Раніше
// export const counterReducer = (state, action) => {
//     switch (action.type) {
//         ...
//     }
// }

export const counterSlice = createSlice({
    name: "counter", // Зарезервований ключ
    initialState, // Зарезервований ключ
    reducers: { // Завжди об'єкт. Приймає у об'єкті завжди довільний ключ: функція (функція завжди!). Пишуться тільки СИНХРОННІ actions
        incrementCount: (state, action) => { // action.type вже не обов'язковий в залежності від звичайного redux
            state.value += action.payload;
        },
        decrementCount: (state, action) => {
            state.value -= action.payload;
        },
        resetCount: (state, action) => {
            state.value = 0;
        }
    },
    // extraReducers: (builder) => {} // для запитів, тобто асинхронні операції
});

export const {incrementCount, decrementCount, resetCount} = counterSlice.actions;

export default counterSlice.reducer