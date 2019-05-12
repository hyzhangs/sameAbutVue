import axios from 'axios';
import store from './store';
import router from './router';

// http 请求拦截
// token 要放在我们的请求header里面

export default function setAxios() {
    axios.interceptors.request.use(
        config => {
            if (store.state.token) {
                config.headers.token = store.state.token;
            }
            return config;
        })
        // m每次的请求都经过拦截器
    axios.interceptors.response.use(
        response => {
            if (response.status == 200) {
                const data = response.data;
                if (data.code == -1) {
                    //登录过期 需要从新登录清空vuex 的token 和localStorage的token
                    store.commit('setToken', "");
                    localStorage.removeItem('token');
                    // 跳转到login 页面
                    router.replace({path:'/login'});
                }
                return data;
            }
            return response;
        }
    )
}