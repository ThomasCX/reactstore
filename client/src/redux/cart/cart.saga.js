import { all, call, takeLatest, put } from 'redux-saga/effects';

//call into listen
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut(){
    yield put(clearCart())
}
export function* onSignOutSuccess() {
    //when a user sign out is successful, empty the cart
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

//call to function to continuously listen
export function* cartSagas(){
    yield all([call(onSignOutSuccess)])
}
