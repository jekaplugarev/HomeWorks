import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const priorityClass = s.name + ' ' + s[props.affair.priority]

    return (
        <div className={s.container}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>
            <button onClick={deleteCallback} className={s.btnX}>X</button>
        </div>
    )
}

export default Affair
