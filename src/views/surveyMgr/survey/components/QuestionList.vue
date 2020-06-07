<template>
    <div>
        <!-- 单选题 & 多选题 -->
        <RadioAndCheckbox v-if="item.type === 'radio' || item.type === 'checkbox'" :item="item" v-on="$listeners"/>




    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import RadioAndCheckbox from './questionList/RadioAndCheckbox'

    export default {
        name: "QuestionList",
        components : {
            RadioAndCheckbox,
        },
        props: {
            item: Object,
            index: Number,
            data: Array
        },
    }
</script>

<style scoped>

</style>
