<style>
    body {
        background-color: #00BFFF;
    }
</style>

<template>
    <div>
        <header-component />
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderComponent from './components/header';

export default {
    name: 'App',
    components: {
        HeaderComponent,
    }
}
</script>
