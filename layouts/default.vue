<template>
<div class="container">
    <noscript></noscript>
    <Header />
    <NavBar />
    <nuxt/>
    <Footer />
</div> 
</template>
<script>
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
    components: {
        Header,
        NavBar,
        Footer
    }
}
</script>
<style scoped></style>