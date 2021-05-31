import React from 'react'
import s from './Message.module.css';
import {MessageType} from './Message';

export function AlternativeMessage(props: MessageType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="avatar" className={s.avatar}/>
            <div className={s.angle}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage
