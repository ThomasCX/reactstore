import BurgerActionTypes from "./Burger.types";

const INITIAL_STATE = {
    visibleMobileMenu: false
}

const BurgerReducer  = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case BurgerActionTypes.SHOW_MOBILE_NAVIGATION_MENU:
            return {
                ...state,
                visibleMobileMenu:
                    true
            };
        case BurgerActionTypes.HIDE_MOBILE_NAVIGATION_MENU:
            return {
                ...state,
                visibleMobileMenu:
                    false
            };
        default:
            return state;
    }
}

export default BurgerReducer;
