export const childrenRoute = [{
        path: '',
        name: "Default",
        component: () => import("../views/Default.vue")
    },
    {
        path: '/About',
        name: "个人信息",
        component: () => import("../views/About.vue")
    },
    {
        path: '/Resume',
        name: "个人评价",
        component: () => import("../views/Resume.vue")
    },
    {
        path: '/Portfolio',
        name: "其他",
        component: () => import("../views/Portfolio.vue")
    }
];