package com.group15.springboot.login.bean;

/**
 * @ClassName : ResultBean
 * @Description :
 * @Author : Ming
 */
public class ResultBean<T> {

    private Integer code;
    private String msg;
    private boolean success;
    private T data;


    public ResultBean success(T data){
        ResultBean<T> resultBean = new ResultBean<>();
        resultBean.setCode(200);
        resultBean.setMsg("success");
        resultBean.setData(data);
        resultBean.setSuccess(true);
        return resultBean;
    }

    public ResultBean success(String msg){
        ResultBean resultBean = new ResultBean();
        resultBean.setCode(200);
        resultBean.setMsg(msg);
        resultBean.setSuccess(true);
        return resultBean;
    }

    public ResultBean success(){
        ResultBean resultBean = new ResultBean();
        resultBean.setCode(200);
        resultBean.setMsg("success");
        resultBean.setSuccess(true);
        return resultBean;
    }

    public ResultBean failure(String msg){
        ResultBean resultBean = new ResultBean();
        resultBean.setCode(500);
        resultBean.setMsg(msg);
        resultBean.setSuccess(false);
        return resultBean;
    }
    public ResultBean failure(){
        ResultBean resultBean = new ResultBean();
        resultBean.setCode(500);
        resultBean.setMsg("failure");
        resultBean.setSuccess(false);
        return resultBean;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
