import { OPEN_CART } from '../reducers/app-reducer';

export const handleOpenCart = (isCartOpen: boolean) => (dispatch: any) => {
    dispatch({
        type: OPEN_CART,
        isCartOpen: isCartOpen,
    });
};
