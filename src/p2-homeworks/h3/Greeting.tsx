import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: any) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.good// need to fix with (?:)

    return (
        <div className={s.container}>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass} onBlur={setNameCallback}/>
                <div className={s.errorAlert}>{error}</div>
            </div>
            <button onClick={addUser} disabled={!name} className={s.btn}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
