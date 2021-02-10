import {
    computed
} from "vue";
import {
    useRouter
} from "vue-router";

/**
 * 路由跳转相关对象生成函数
 * @description 生成一个路由跳转相关对象
 * @return {Object} 
 *  @property {Function} toPage 输入path 跳转到对应路由 
 */
const routerJump = () => {
    const router = useRouter();

    /**
     * 路径跳转路由函数
     * @description 根据路径跳转对应路由
     * @param {string} path 路径
     */
    const toPage = path => router.push(path);

    return {
        toPage
    };
};

/**
 * 路径链接标识对象生成函数
 * @description 生成一个标识对象
 * @return {Object} 
 *  @property {string} title 标题 
 *  @property {string} des 描述
 */
const pathToSign = () => {
    const router = useRouter();

    /**
     * 标题
     */
    const title = computed(() => {
        const {
            path
        } = router.currentRoute.value;
        return path === "/" ? "I'M" : "";
    });

    /**
     * 描述
     */
    const des = computed(() => {
        console.log(router,router.currentRoute.value)
        const {
            path,
            name
        } = router.currentRoute.value;
        return path === "/" ? "lqr" : name;
    });

    return {
        title,
        des
    }
}

export {
    routerJump,
    pathToSign
}