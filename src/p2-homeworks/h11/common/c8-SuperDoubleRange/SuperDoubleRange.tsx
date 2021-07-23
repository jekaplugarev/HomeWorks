import Slider from '@material-ui/core/Slider/Slider'
import React, {ChangeEvent} from 'react'
import {makeStyles} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeSuperRange?: (value: number | number[]) => void
    value?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeSuperRange, value,
    }
) => {
    // сделать самому, можно подключать библиотеки

    const useStyles = makeStyles({
        root: {
            width: 300,
        },
    });

    function valuetext(value: number) {
        return `${value}`;
    }

    const classes = useStyles();

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeSuperRange && onChangeSuperRange(newValue);
    };

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>)
}

export default SuperDoubleRange
