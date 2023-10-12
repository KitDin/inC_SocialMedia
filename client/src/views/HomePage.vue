<template>
    <div>
        <Header></Header>
        <div class="HomeContent">
            <Nav></Nav>
        </div>
    </div>
</template>


<style scoped>
.HomeContent {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>

<script >
import Footer from "../components/Footer.vue"
import Nav from "../components/Nav.vue"
export default {
    components: {
        Footer,
        Nav
    }
}
</script>
