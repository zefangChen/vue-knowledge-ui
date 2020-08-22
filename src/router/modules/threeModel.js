const threeModel = {
    path: 'threeModel',
    component: ()=> import('@/views/layout/AppMain'),
    icon: 'el-icon-menu',
    meta: {
        title: '3D模型管理'
    },
    children: [
        {
            path: 'basicThreeD',
            component: ()=> import('@/views/threeMgr/BasicThreeD.vue'),
            name: 'basicThreeD',
            icon: 'el-icon-document-checked',
            meta: {
                title: '基础3D模型'
            }
        },
        {
            path: 'loadModel',
            component: ()=> import('@/views/threeMgr/LoadModel.vue'),
            name: 'loadModel',
            icon: 'el-icon-document-checked',
            meta: {
                title: '加载3D模型'
            }
        },


    ]
}
 export default threeModel
