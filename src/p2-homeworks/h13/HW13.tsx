import React, {ChangeEvent, useEffect, useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestsAPI";
import {Request} from "./Request";

function HW13() {
    const [checked, setChecked] = useState<boolean>(false);
    const [resp, setResp] = useState<string>('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    useEffect(() => {
        if (checked) {
            requestAPI.testRequest()
                .then(response => {
                    console.log(response)
                    setResp(response.data.info)
                })
                .catch(error => {
                    console.log( {...error} );
                    const err = error.response ? error.response.data.errorText : error.message
                    console.log( err);
                    setResp(err)
                })
        }
    }, [checked]);

    return (
        <div>
            <div>
                <hr/>
                <span>
                <p>homeworks 13</p>
            </span>
                <SuperCheckbox
                    onChange={changeHandler}
                >Отправить запрос</SuperCheckbox>
                <Request

                    resp={resp}
                />
                <hr/>
            </div>
        </div>
    );
}

export default HW13;