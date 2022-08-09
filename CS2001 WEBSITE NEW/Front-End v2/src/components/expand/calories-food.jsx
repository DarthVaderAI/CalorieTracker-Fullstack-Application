import {CaloriesPage} from './calories-page'
import {CaloriesCalculate} from "./calories-calculate"
import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../Login";
import {list} from "../../api/food";



class CaloriesFood extends Component {
    async initData() {
        let foodList;
        await list().then(res => {
            if (res.data.code === 200) {
                foodList = res.data.data;
                localStorage.setItem('foodList', JSON.stringify(foodList))
            }
        });
    };


    constructor(props) {
        super(props);
        this.initData();
        let item = localStorage.getItem('foodList');
        let breakfastList;
        let lunchList;
        let dinnerList;
        if(item != null){
            item =JSON.parse(item)
            breakfastList = this.getFoodListDiv(item.breakfast,"0");
            lunchList = this.getFoodListDiv(item.lunch,"1");
            dinnerList = this.getFoodListDiv(item.dinner,"2");
        }

        // const breakfastList = this.getFoodListDiv(this.props.food.breakfast,"0");
        // const lunchList = this.getFoodListDiv(this.props.food.lunch,"1");
        // const dinnerList = this.getFoodListDiv(this.props.food.dinner,"2");

        this.state = {
            food:item,

            breakfastList: breakfastList,
            lunchList: lunchList,
            dinnerList: dinnerList,

            //早餐卡路里
            breakfastCalories: '',
            //午餐卡路里
            lunchCalories: '',
            //晚餐卡路里
            dinnerCalories: '',
            // 计算结果
            calResult:''
        }
    }

    handleClick(mark){
        let type = mark.split("-")[0];
        let index = mark.split("-")[1];
        // 早餐
        if (type === '0'){
            if(this.state.breakfastCalories === ''){
                this.setState({
                    breakfastCalories:this.state.food.breakfast[index].name + "(" + this.state.food.breakfast[index].value+"calories)"
                })
            }else {
                this.setState({
                    breakfastCalories:this.state.breakfastCalories +"\n"+ this.state.food.breakfast[index].name + "(" + this.state.food.breakfast[index].value+"calories)"
                })
            }

            if(this.state.calResult !== ''){
                this.setState({
                    calResult: this.state.calResult + this.state.food.breakfast[index].value
                })
            }else {
                this.setState({
                    calResult: this.state.food.breakfast[index].value
                })
            }
        }

        // 午餐
        if (type === '1'){
            if(this.state.lunchCalories === ''){
                this.setState({
                    lunchCalories:this.state.food.lunch[index].name + "(" + this.state.food.lunch[index].value+"calories)"
                })
            }else {
                this.setState({
                    lunchCalories:this.state.lunchCalories + "\n"+ this.state.food.lunch[index].name + "(" + this.state.food.lunch[index].value+"calories)"
                })
            }


            if(this.state.calResult !== ''){
                this.setState({
                    calResult: this.state.calResult + this.state.food.lunch[index].value
                })
            }else {
                this.setState({
                    calResult: this.state.food.lunch[index].value
                })
            }
        }

        // 晚餐
        if (type === '2'){
            if(this.state.dinnerCalories === ''){
                this.setState({
                    dinnerCalories:this.state.food.dinner[index].name + "(" + this.state.food.dinner[index].value+"calories)"
                })
            }else {
                this.setState({
                    dinnerCalories:this.state.dinnerCalories + "\n"+ this.state.food.dinner[index].name + "(" + this.state.food.dinner[index].value+"calories)"
                })
            }

            if(this.state.calResult !== ''){
                this.setState({
                    calResult: this.state.calResult + this.state.food.dinner[index].value
                })
            }else {
                this.setState({
                    calResult: this.state.food.dinner[index].value
                })
            }
        }




    }

    getFoodListDiv(foodList, type){
        let btn = {
            display: "inline-block",
            padding: "6px 12px",
            marginBottom: "0",
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "1.42857143",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            touchAction: "manipulation",
            cursor: "pointer",
            backgroundImage: "none",
            border: "1px solid transparent",
            borderRadius: "4px"
        }


        if(foodList !== undefined){
            let foodListDiv = []
            for (const [index, value] of foodList.entries()) {
                foodListDiv.push(
                    <div className="col-xs-12 col-md-6 food-height-60">
                        <div className="food-div">
                            <div className="food-img-margin-left food-float-left"><img width="43" src={value.img}/></div>
                            <div className="food-float-left">
                                <div className="food-title">{value.name}</div>
                                <div>{value.value}calories(per 100g)</div>
                            </div>
                            <div className="food-float-right food-add">
                                <button type="button" style={btn}  className="btn-default" onClick = {(params) => this.handleClick(type+"-"+index) }>+</button>
                            </div>
                        </div>
                    </div>
                )
            };
            return foodListDiv
        }
    }



    render() {
        const isLogin = localStorage.getItem('isLogin')

        if(isLogin !== '1'){
            alert("请先登录")
            window.location.href="http://localhost:3000/login"
        }else {
            return (
                <div className="food-body">
                    <div className="col-xs-12 col-md-8">
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active"><a href="#breakfast" aria-controls="breakfast" role="tab"
                                                                          data-toggle="tab">breakfast</a></li>
                            <li role="presentation"><a href="#lunch" aria-controls="lunch" role="tab"
                                                       data-toggle="tab">lunch</a></li>
                            <li role="presentation"><a href="#dinner" aria-controls="dinner" role="tab"
                                                       data-toggle="tab">dinner</a></li>
                        </ul>

                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="breakfast">
                                {this.state.breakfastList}
                                <div className="food-center"></div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="lunch">
                                {this.state.lunchList}
                                <div className="food-center"></div>

                            </div>
                            <div role="tabpanel" className="tab-pane" id="dinner">
                                {this.state.dinnerList}
                                <div className="food-center"></div>
                            </div>
                        </div>

                    </div>


                    <div className="col-xs-12 col-md-4">
                        <CaloriesCalculate
                            key={this.state.key}
                            breakfastCalories={this.state.breakfastCalories}
                            lunchCalories={this.state.lunchCalories}
                            dinnerCalories={this.state.dinnerCalories}
                            calResult={this.state.calResult}
                        />
                    </div>
                </div>
            );
        }



    }


}
export default CaloriesFood
