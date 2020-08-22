const componentDemo = {
    path: 'example',
    component: ()=> import('@/views/layout/AppMain'),
    name: 'table',
    icon: 'el-icon-s-grid',
    meta: {
        title: '实用小列子'
    },
    children: [
        {
            path: 'countTo',
            component: ()=> import('@/views/component-demo/countTo.vue'),
            name: 'countTo',
            icon: 'el-icon-s-grid',
            meta: {
                title: '数字动态'
            }
        },


    ]
}
 export default componentDemo
