<template>
    <div id="app">
        <img src="../images/logo.png">
        <div>VUEVUEVUE</div>
        <hello></hello>
    </div>
</template>

<script>
import Hello from './components/Hello';

export default {
    name: 'app',
    components: {
        Hello
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: red;
    margin-top: 60px;
}
</style>
