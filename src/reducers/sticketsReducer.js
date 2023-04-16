// =================== Actions types ===================
const GHE_DANG_CHON = "GHE_DANG_CHON";
const GHE_DA_DAT = "GHE_DA_DAT";
const GHE_BI_HUY = "GHE_BI_HUY";

// =================== Actions creater ===================
// export const chooseSeatAction = (seats) => {
//     return { type: GHE_DANG_CHON, payload: seats };
// }


// export const seatCancelAction = (seats) => {
//     return { type: GHE_BI_HUY, payload: seats };
// }

// =================== Reducer ===================
const initialState = {
    selectedSeat: [],
    seatListAll: [
        {
            row: "",
            seatsList: [
                { seats: "1", price: 0 },
                { seats: "2", price: 0 },
                { seats: "3", price: 0 },
                { seats: "4", price: 0 },
                { seats: "5", price: 0 },
                { seats: "6", price: 0 },
                { seats: "7", price: 0 },
                { seats: "8", price: 0 },
                { seats: "9", price: 0 },
                { seats: "10", price: 0 },
                { seats: "11", price: 0 },
                { seats: "12", price: 0 }
            ]
        },
        {
            row: "A",
            seatsList: [
                { seats: "A1", price: 75000, booked: false },
                { seats: "A2", price: 75000, booked: false },
                { seats: "A3", price: 75000, booked: false },
                { seats: "A4", price: 75000, booked: false },
                { seats: "A5", price: 75000, booked: false },
                { seats: "A6", price: 75000, booked: false },
                { seats: "A7", price: 75000, booked: false },
                { seats: "A8", price: 75000, booked: false },
                { seats: "A9", price: 75000, booked: false },
                { seats: "A10", price: 75000, booked: false },
                { seats: "A11", price: 75000, booked: true },
                { seats: "A12", price: 75000, booked: true },
            ]
        },
        {
            row: "B",
            seatsList: [
                { seats: "B1", price: 75000, booked: false },
                { seats: "B2", price: 75000, booked: false },
                { seats: "B3", price: 75000, booked: false },
                { seats: "B4", price: 75000, booked: false },
                { seats: "B5", price: 75000, booked: false },
                { seats: "B6", price: 75000, booked: false },
                { seats: "B7", price: 75000, booked: false },
                { seats: "B8", price: 75000, booked: false },
                { seats: "B9", price: 75000, booked: false },
                { seats: "B10", price: 75000, booked: false },
                { seats: "B11", price: 75000, booked: false },
                { seats: "B12", price: 75000, booked: false },
            ]
        },
        {
            row: "C",
            seatsList: [
                { seats: "C1", price: 75000, booked: false },
                { seats: "C2", price: 75000, booked: false },
                { seats: "C3", price: 75000, booked: false },
                { seats: "C4", price: 75000, booked: false },
                { seats: "C5", price: 75000, booked: false },
                { seats: "C6", price: 75000, booked: false },
                { seats: "C7", price: 75000, booked: false },
                { seats: "C8", price: 75000, booked: false },
                { seats: "C9", price: 75000, booked: false },
                { seats: "C10", price: 75000, booked: false },
                { seats: "C11", price: 75000, booked: false },
                { seats: "C12", price: 75000, booked: false },
            ]
        },
        {
            row: "D",
            seatsList: [
                { seats: "D1", price: 75000, booked: false },
                { seats: "D2", price: 75000, booked: false },
                { seats: "D3", price: 75000, booked: false },
                { seats: "D4", price: 75000, booked: false },
                { seats: "D5", price: 75000, booked: false },
                { seats: "D6", price: 75000, booked: false },
                { seats: "D7", price: 75000, booked: false },
                { seats: "D8", price: 75000, booked: false },
                { seats: "D9", price: 75000, booked: false },
                { seats: "D10", price: 75000, booked: false },
                { seats: "D11", price: 75000, booked: false },
                { seats: "D12", price: 75000, booked: false },
            ]
        },
        {
            row: "E",
            seatsList: [
                { seats: "E1", price: 75000, booked: false },
                { seats: "E2", price: 75000, booked: false },
                { seats: "E3", price: 75000, booked: false },
                { seats: "E4", price: 75000, booked: false },
                { seats: "E5", price: 75000, booked: false },
                { seats: "E6", price: 75000, booked: false },
                { seats: "E7", price: 75000, booked: false },
                { seats: "E8", price: 75000, booked: false },
                { seats: "E9", price: 75000, booked: false },
                { seats: "E10", price: 75000, booked: false },
                { seats: "E11", price: 75000, booked: false },
                { seats: "E12", price: 75000, booked: false },
            ]
        },
        {
            row: "F",
            seatsList: [
                { seats: "F1", price: 75000, booked: false },
                { seats: "F2", price: 75000, booked: false },
                { seats: "F3", price: 75000, booked: false },
                { seats: "F4", price: 75000, booked: false },
                { seats: "F5", price: 75000, booked: false },
                { seats: "F6", price: 75000, booked: false },
                { seats: "F7", price: 75000, booked: false },
                { seats: "F8", price: 75000, booked: false },
                { seats: "F9", price: 75000, booked: false },
                { seats: "F10", price: 75000, booked: false },
                { seats: "F11", price: 75000, booked: false },
                { seats: "F12", price: 75000, booked: false },
            ]
        },
        {
            row: "G",
            seatsList: [
                { seats: "G1", price: 75000, booked: false },
                { seats: "G2", price: 75000, booked: false },
                { seats: "G3", price: 75000, booked: false },
                { seats: "G4", price: 75000, booked: false },
                { seats: "G5", price: 75000, booked: false },
                { seats: "G6", price: 75000, booked: false },
                { seats: "G7", price: 75000, booked: false },
                { seats: "G8", price: 75000, booked: false },
                { seats: "G9", price: 75000, booked: false },
                { seats: "G10", price: 75000, booked: false },
                { seats: "G11", price: 75000, booked: false },
                { seats: "G12", price: 75000, booked: false },
            ]
        },
        {
            row: "H",
            seatsList: [
                { seats: "H1", price: 75000, booked: false },
                { seats: "H2", price: 75000, booked: false },
                { seats: "H3", price: 75000, booked: false },
                { seats: "H4", price: 75000, booked: false },
                { seats: "H5", price: 75000, booked: false },
                { seats: "H6", price: 75000, booked: false },
                { seats: "H7", price: 75000, booked: false },
                { seats: "H8", price: 75000, booked: false },
                { seats: "H9", price: 75000, booked: false },
                { seats: "H10", price: 75000, booked: false },
                { seats: "H11", price: 75000, booked: false },
                { seats: "H12", price: 75000, booked: false },
            ]
        },
        {
            row: "I",
            seatsList: [
                { seats: "I1", price: 75000, booked: false },
                { seats: "I2", price: 75000, booked: false },
                { seats: "I3", price: 75000, booked: false },
                { seats: "I4", price: 75000, booked: false },
                { seats: "I5", price: 75000, booked: false },
                { seats: "I6", price: 75000, booked: false },
                { seats: "I7", price: 75000, booked: false },
                { seats: "I8", price: 75000, booked: false },
                { seats: "I9", price: 75000, booked: false },
                { seats: "I10", price: 75000, booked: false },
                { seats: "I11", price: 75000, booked: false },
                { seats: "I12", price: 75000, booked: false },
            ]
        },
        {
            row: "J",
            seatsList: [
                { seats: "J1", price: 75000, booked: false },
                { seats: "J2", price: 75000, booked: false },
                { seats: "J3", price: 75000, booked: false },
                { seats: "J4", price: 75000, booked: false },
                { seats: "J5", price: 75000, booked: false },
                { seats: "J6", price: 75000, booked: false },
                { seats: "J7", price: 75000, booked: false },
                { seats: "J8", price: 75000, booked: false },
                { seats: "J9", price: 75000, booked: false },
                { seats: "J10", price: 75000, booked: false },
                { seats: "J11", price: 75000, booked: false },
                { seats: "J12", price: 75000, booked: false },
            ]
        }

    ]
}

function sticketsReducer(state = initialState, action) {
    switch (action.type) {
        case GHE_DANG_CHON:
            // Tìm ghế đang được chọn
            const isChooseSeat = state.selectedSeat.find((item) => {
                return item.seats === action.payload.seats;
            });

            // // Tìm hàng của danh sách ghế ngồi
            // const indexRow = state.seatListAll.findIndex((item) => item.row === action.row);

            // console.log(state.seatListAll[indexRow]);

            // // Tạo mới danh sách seatsList
            // const seatsList = state.seatListAll[indexRow].seatsList.map((item) => {
            //     if (item.seats === action.seats) {
            //         if (item.selected) {
            //             return { ...item, booked: false }
            //         }
            //         return { ...item, booked: true };
            //     }
            //     return item;
            // })

            // // tạo mảng seatList mới
            // const seatList = state.seatListAll.map((item) => {
            //     if (item.hang === action.hang) {
            //         return { ...item, seatsList: seatsList };
            //     }
            //     return item;
            // })


            if (isChooseSeat) {
                const newSeats = state.selectedSeat.filter((item) => {
                    return item.seats !== action.payload.seats;
                });
                return { ...state, selectedSeat: newSeats };
            }

            const newSeats = [...state.selectedSeat, action.payload];
            return { ...state, selectedSeat: newSeats };

        case GHE_DA_DAT:
            const choosedList = state.seatListAll.map((choosedSeats) => {
                const isChooseSeat = state.selectedSeat.find((item) => {
                    return item.seats === choosedSeats.seats;
                });

                if (isChooseSeat) {
                    return { ...choosedSeats, booked: true }
                }
                return choosedSeats;
            })

            return { ...state, choosedList, selectedSeat: [] };

        case GHE_BI_HUY:
            const seatCancel = state.selectedSeat.filter((item) => {
                return item.seats !== action.payload;
            })
            return { ...state, selectedSeat: seatCancel };

        default:
            return state;
    }
}

export default sticketsReducer;