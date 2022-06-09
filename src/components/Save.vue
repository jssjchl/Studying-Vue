<template>
<PageTitle/>
    <div>
        <input type="text" v-model="userInfo.name" />
        <input type="text" v-model.number="userInfo.age" />
        <input type="text" v-model="userInfo.job" />
        <button type="button" @click="saveUserInfo">저장</button>
    </div>
</template>
<script>
import PageTitle from '/@components/PageTitle.vue';

export default {
    name: '',
    components: {PageTitle},
    data() {
        return {
            name: ''
            , age: 0
            , job: ''
            , userInfo: { //파라미터로 던질걸 생각해서 오브젝트로 만들어서 이렇게 보내는 방법도 있다. 관련된 데이터끼리 묶어서 데이터 필드를 관리하는 것이 가독성이 좋다.
                name: ''
                , age: 0
                , job: ''
            }
        };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {
        saveUserInfo() {
            if (this.userInfo.name == '') {
                // return alert("사용자의 이름을 입력하세요");
                return this.$swal.fire(
                    '사용자의 이름을 입력해주세요',
                    '사용자의 이름을 입력해주세요',
                    'question'
                );
            }
            if (this.userInfo.age == 0 && this.userInfo.age == '') {
                return alert("나이를 입력하세요");
            }
            // const params = {
            //     name: this.name
            //     , age: this.age
            //     , job: this.job
            // }
            const result = this.saveData(this.userInfo);
            if (result == 'S') {
                alert("사용자 정보가 생성되었습니다.")
            }
        },
        saveData(userInfo) {
            console.log(userInfo);
            const result = 'S';
            return result;
        }
    },
}</script>
<style scoped>
</style>