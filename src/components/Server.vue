<template>
<div>
    <PageTitle :title="title"/> 
    <button type="button" @click="callChildFunc"> 부모에 있는 클릭</button>
    <hr/>
    <!-- PageTitle.vue의 title값을 바꿔줄 수 있다. -->
    <!-- <ChildComponent :likes="2" :commentId="[1,5,2,3]" :isOk= "true" ref="child"/>  -->
    
    <!-- ref의 이름을 통해서 참조 가능 -->
    
    <!-- 동적바인딩을 사용해서 데이터를 입력하면 전달할 데이터와 같은 문자형으로 전달된다.
        likes ="2" => String :likes ="2" => Number -->

    <!-- import받은 페이지 사용 -->

    <ChildComponent @send-message="sendMessage"  ref="child"/>
    <h1>
        {{parentMsg}}
    </h1>
    <button type="button" @click="getProductList">조회</button>
    <table>
        <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>배송료</th>
                <th>카테고리</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(product, i) in productList">
                <td>{{product.product_name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.delievery_price}}</td>
                <td>{{product.category}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
import axios from 'axios';
import PageTitle from '/@components/PageTitle.vue';
import ChildComponent from './ChildComponent.vue';

export default {
    name: '',
    components: {PageTitle, ChildComponent}, //import받은 페이지는 components 안에 넣어줘야 사용할 수 있다.
    data() {
        return {
            title: '부모컴포넌트에서 전송할 페이지 타이틀'
            , likes: 1
            , productList: []
            , parentMsg : ''
        };
    },
    sertup() { },
    created() { },
    mounted() { 
       
    },
    unmounted() { },

    methods: {
        callChildFunc(){
            // this.$refs.child.$refs.childBtn.click();
            //ChildComponent ref의 이름 child를 통해 해당 컴포넌트에 접근, ChildComponent의 Button ref의 이름 childBtn의 이름을 통해 버튼에 접근, 그리고 클릭이벤트 실행
            // this.$refs.child.childFunction();
            //해당 컴포넌트에 접근했으면 컴포넌트의 모든 함수를 호출할 수 있다.
            this.$refs.child.msg ='부모가 바꿈 ㅅㄱ';
            //컴포넌트의 데이터도 바꿀 수 있음
        },

        async getProductList() {  //함수내에서 await을 사용하려면 함수명 앞에 async가 붙어야한다.
            this.productList = await this.api('https://c05dad3a-e47b-4dcc-a5d9-dcc82660cf9d.mock.pstmn.io/productList', 'get', {});
            console.log(this.productList);
        },
        async api(url, method, data) {
            return (await axios({ //서버로 호출했던 그 res를 받기 까지 await으로 기다렸다가 실행
                method: method //get, post등의 방식
                , url: url
                , data: data //보낼 데이터
            }).catch(e => {
                console.log(e);
            })).data; //response는 data에 담긴다. 
        },
        sendMessage(data){
            this.$swal(data);
            this.parentMsg = data;
        }
    }
}
</script>
<style scoped>
</style>