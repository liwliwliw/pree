import { getAction,postAction } from "./api";


// 登录接口
export const getLogin=(data)=>postAction('/login/',data)

// 登录获取验证码

export const getCode=(data)=>postAction('/getSms/',data)
