<template>
    <div>
        <select>
            <option :value="city.v" :key="i" v-for="(city, i) in options">{{ city.t }}</option>
        </select>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>제품가격</th>
                    <th>배송비</th>
                    <th>제품 카테고리</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="( product, i ) in productList"> 
                <!-- v-for문법(리스트렌더링)을 사용할 때는 :key를 주어야한다. -->
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.delevery_price }}</td>
                    <td>{{ product.category }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

export default {
    name: '',
    components: {},
    data() {
        return {
            options: [
                { v: '2', t: '서울' }
                , { v: '21', t: '부산' }
                , { v: '12', t: '대구' }
            ],
            productList: [
                { product_name: '기계식키보드', price: 25000, delevery_price: 5000, category: '전자제품' }
                , { product_name: '마우스', price: 15000, delevery_price: 3000, category: '전자제품' }
                , { product_name: '노트북', price: 250000, delevery_price: 50000, category: '전자제품' }
            ]
        };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
}</script>
<style scoped>
</style>