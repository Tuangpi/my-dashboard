
import authReducer from '@/pages/users/Auth/store/authReducer';
import hamburgerReducer from '@/pages/users/layout/store/hamburgerReducer';
import UserMenuDropDownReducer from '@/pages/users/layout/store/UserMenuDropDownReducer';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    hamburger: hamburgerReducer,
    userDropdown: UserMenuDropDownReducer,
    auth: authReducer
});

export default rootReducer;
