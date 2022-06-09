<template>
    <div>
        <!-- 조회화면 -->
        <div>
            <select v-model="selectdCity">
                <option :key="i" :value="city.code" v-for="(city, i) in cityList">{{ city.name }}</option>
            </select>
            <!-- 조회 조건 -->
            <input type="text" v-model="userName" @keyup.enter="searchUserList" />
            <button type="button" @click="searchUserList">조회</button>
            <!-- 조회 버튼  , 조회된 결과를 밑에 테이블에 노출-->
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>직업</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(person, i) in userList">
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 저장화면 -->
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            cityList: [
                { name: 'seoul', code: '02' }
                , { name: 'busan', code: '21' }
                , { name: 'jeju', code: '64' }
            ],
            selectdCity: ''
            , userName: ''
            , userList: []
        };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {
        searchUserList() {
            // const selectdCity =this.selectdCity;
            // const userName = this.userName;
            const params = {
                selectdCity: this.selectdCity
                , userName: this.userName
                //이렇게 파라미터를 담아서 서버로 줄 수 있다. 
            }
            this.userList = this.getUserList(params);
        },
        getUserList(params) { //서버를 대신할 부분
            console.log(params);

            let list = [
                { name: 'jaeseok', age: 28, job: 'student' }
                , { name: 'jiwon', age: 28, job: 'student' }
                , { name: 'jongchan', age: 28, job: 'student' }
            ];
            return list;
        }
    },
}</script>
<style scoped>
</style>