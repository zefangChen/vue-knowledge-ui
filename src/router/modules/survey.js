const survey = {
    path: 'surveyMgr',
    component: ()=> import('@/views/layout/AppMain'),
    name: 'survey',
    icon: 'el-icon-menu',
    meta: {
        title: '问卷星模拟'
    },
    children: [
        {
            path: 'surveyManagement',
            component: ()=> import('@/views/surveyMgr/survey/index.vue'),
            name: 'surveyManagement',
            icon: 'el-icon-document-checked',
            meta: {
                title: '问卷题目拖拽'
            }
        },
        {
            path: 'templateMgr',
            component: ()=> import('@/views/surveyMgr/template/index.vue'),
            name: 'templateMgr',
            icon: 'el-icon-document',
            meta: {
                title: '模板管理'
            }
        },

    ]
}
 export default survey
