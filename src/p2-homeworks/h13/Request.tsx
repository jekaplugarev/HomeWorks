import React from "react";

type RequestPropsType = {

    resp: string
}

export const Request: React.FC<RequestPropsType> = ({resp}) => {

    return (
        <div>Ответ: {resp}</div>
    )
}