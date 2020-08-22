const table = {
    path: 'tableMgr',
    component: ()=> import('@/views/layout/AppMain'),
    name: 'tableMgr',
    icon: 'el-icon-s-grid',
    meta: {
        title: '表格'
    },
    children: [
        {
            path: 'commonTable',
            component: ()=> import('@/views/table/commonTable/index.vue'),
            name: 'commonTable',
            icon: 'el-icon-s-grid',
            meta: {
                title: '常规表格'
            }
        },

    ]
}
 export default table
