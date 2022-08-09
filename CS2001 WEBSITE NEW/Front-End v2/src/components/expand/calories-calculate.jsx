import React from "react";
export const CaloriesCalculate = (props) => {
    let content = {
        marginBottom:'10px'

    };
    let h1 = {
        cursor:'pointer',
        fontSize: '15px',
        height:'30px',
        textAlign:"center"
    };

    return (
        <div className="box">
            <div style={h1} class="bg-secondary text-white">breakfast</div>
            <div style={content} className='p' class="bg-light text-dark">
                {props.breakfastCalories}
            </div>

            <div style={h1} class="bg-secondary text-white">lunch</div>
            <div style={content} className='p' class="bg-light text-dark">
                {props.lunchCalories}
            </div>

            <div style={h1} class="bg-secondary text-white">dinner</div>
            <div className='p' class="text-dark">
                {props.dinnerCalories}
            </div>
            <span>total energy consumption：{props.calResult}</span>
        </div>

    );
};




