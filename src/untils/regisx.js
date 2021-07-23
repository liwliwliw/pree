import { getAction,postAction } from "./api";
// 注册
export const getRegisx=(data)=>postAction('/register/',data)

// 注册验证码

export  const getRegisxCode=(data)=>postAction('/getSms/',data)