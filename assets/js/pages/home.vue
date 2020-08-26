<template>
    <div>
        <h1>Hello from the home</h1>

        <h2>Our products</h2>

        <ul>
            <li v-for="(product, index) in products"
                :key="index"
            >
                {{ product.name }} - {{ product.price }}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Home',
        data() {
            return {
                products: [],
            }
        },
        async created() {
            const response = await axios.get('/api/products');

            this.products = response.data['hydra:member'];
        }
    }
</script>
