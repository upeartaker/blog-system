// plugins 在实例化vue应用程序之前被调用
export default function ({$axios,redirect,utils}) {
    if(process.client){
        $axios.defaults.withCredentials = true
        let id = utils.getCookie('UserID');
        $axios.setHeader('Cookie',`UserId=${id}`)
    }
}