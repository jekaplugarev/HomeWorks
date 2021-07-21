import React from "react";
import s from "./HW12.module.css";
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC, ThemeStateType} from './bll/themeReducer';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const themeObj = useSelector<AppStoreType, ThemeStateType>(state => state.theme) // useSelector
    const {theme} = themeObj;
    const dispatch = useDispatch()
    const onChangeCallback = (value: ThemeStateType) => {
        dispatch(changeThemeAC(value))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={`${s[theme]}`}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
        </div>
    );
}

export default HW12;
