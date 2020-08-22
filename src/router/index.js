import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/*Router Modules*/
import survey from './modules/survey'
import table from './modules/table'
import componentDemo from './modules/componentDemo'
import threeModel from './modules/threeModel'

export const constantRouterMap =[
    {
        path: '/',
        component: ()=> import('@/views/layout/index'),
        name: '',
        icon: '',
        redirect: '/home',
        children: [
            {
                path: 'home-1',
                component: ()=> import('@/views/home/index'),
                name: 'home-1',
                icon: 'el-icon-s-home',
                redirect: '/home',
                meta: {
                    title: '首页',
                    titleEn: 'home-1'
                }
            },
            survey,
            table,
            componentDemo,
            threeModel,
            {
                path: 'international',
                component: ()=> import('@/views/I18n/index'),
                name: 'international',
                icon: 'el-icon-s-tools',
                meta: {
                    title: '国际化',
                    titleEn: 'I18n'
                }
            },
            {
                path: 'pdfPreview',
                component: ()=> import('@/views/PdfPreview/index.vue'),
                name: 'pdfPreview',
                icon: 'el-icon-printer',
                meta: {
                    title: 'PDF预览',
                    titleEn: 'PDF'
                }
            },
            {
                path: 'charts',
                // component: ()=> import('@/views/layout/index.vue'),
                name: 'charts',
                icon: 'el-icon-s-data',
                meta: {
                    title: '图表',
                    titleEn: 'charts'
                }
            },
            {
                path: 'errorPage',
                // component: ()=> import('@/views/layout/index.vue'),
                name: 'errorPage',
                icon: 'el-icon-error',
                meta: {
                    title: '错误页面',
                    titleEn: 'error page'
                }
            },
            {
                path: 'excel',
                component: ()=> import('@/views/excelDownload/index.vue'),
                name: 'Excel',
                icon: 'el-icon-s-grid',
                meta: {
                    title: 'Excel表格上传下载',
                    titleEn: 'Excel'
                }
            },
            {
                path: 'less',
                // component: ()=> import('@/views/layout/index.vue'),
                name: 'Less',
                icon: 'el-icon-magic-stick',
                meta: {
                    title: 'Less使用',
                    titleEn: 'Less'
                }
            },
            {
                path: 'sass',
                // component: ()=> import('@/views/layout/index.vue'),
                name: 'Sass',
                icon: 'el-icon-magic-stick',
                meta: {
                    title: 'sass使用',
                    titleEn: 'Sass'
                }
            },
            {
                path: 'scrollTo',
                component: ()=> import('@/views/scrollTo/index.vue'),
                name: 'scrollTo',
                icon: 'el-icon-magic-stick',
                meta: {
                    title: '锚点定位',
                    titleEn: 'scrollTo'
                }
            },
            {
                path: 'carouselHeight',
                component: ()=> import('@/views/carouselHeight/index.vue'),
                name: 'carouselHeight',
                icon: 'el-icon-magic-stick',
                meta: {
                    title: 'Element走马灯高度调节',
                    titleEn: 'carouselHeight'
                }
            }
        ]
    },
    {
        path: '/home',
        component: ()=> import('@/views/home/index'),
        name: 'home',
        icon: 'el-icon-s-home',
        hidden: true,
        meta: {
            title: '首页',
            titleEn: 'home'
        }
    }
]


export default new Router({
    scrollBehavior: ()=>({y: 0}),
    routes: [...constantRouterMap]
})
