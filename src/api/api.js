import axios from 'axios'//封装所有接口文件

// 创建请求对象
let req =axios.create({
    baseURL:'',
    timeout:10000
})

export function get (){
    return req.get
}