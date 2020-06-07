// import { routerMap } from '@/router'

const app = {
    state: {
        isCollapse: false,
        isScrollHead: false,
        menuList: [],
        pageData: {
            list: [],
            title: "问卷调查",
            statsCode: "",
            theme: "theme1",
            style: {
                backgroundColor: "#fff",
                backgroundImage: "",
            }
        },
        selectQuest: {},

    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.isCollapse = !state.isCollapse
        },
        IS_SCROLL_HEAD: state => {
            state.isScrollHead = !state.isScrollHead
        },
        SET_MENU_LIST: (state, menuList) => {
            state.menuList = routerMap.concat(menuList)
        },
        SET_PAGE_DATA(state,pageData){
            state.pageData = pageData
        },
        SET_SELECT_WG(state,selectQuest){
            state.selectQuest = selectQuest
        },
    },
    actions: {
        toggleSideBar({ commit }, isCollapse) {
            commit('TOGGLE_SIDEBAR', isCollapse)
        },
        handleScrollHead({ commit }, isScrollHead) {
            commit('IS_SCROLL_HEAD', isScrollHead)
        },
        getMenuList({ commit }, menuList) {
            commit('SET_MENU_LIST', menuList)
        },

    }
}

export default app
