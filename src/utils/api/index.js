import http from './http'

const api = {
    //上传文件
    UploadUrl(){
        const baseApi = import.meta.env.VITE_APP_BASE_API
        return baseApi + 'file/upload'
    },
    // 登录获取token
    /* getToken(data = {}){
        return http.post('UserInfo/Login',data)
    }, */
}

export default api