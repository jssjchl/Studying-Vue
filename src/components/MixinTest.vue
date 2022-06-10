<template>
    <div>
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
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.delievery_price }}</td>
                    <td>{{ product.category }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import mixIApi from '../api.js'
export default {
    name: '',
    mixins: [mixIApi],
    components: {},
    data() {
        return {
            productList: []
        };
    },
    methods: {
        async getProductList() {
            this.productList = await this.$callApi(
                'https://c05dad3a-e47b-4dcc-a5d9-dcc82660cf9d.mock.pstmn.io/productList'
                , 'get'
                , {}
                );
            console.log(this.productList);
        },
    }
}
</script>
<style scoped>
</style>