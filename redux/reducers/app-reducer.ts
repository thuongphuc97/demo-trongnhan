export const OPEN_CART = 'OPEN_CART';

const initState = {
    isCartOpen: false,
};

const appReducer = (state = initState, payload: any) => {
    switch (payload.type) {
        case OPEN_CART:
            return {
                ...state,
                isCartOpen: payload.isCartOpen,
            };

        default:
            return state;
    }
};

export default appReducer;
