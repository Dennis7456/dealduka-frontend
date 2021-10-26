<template>
    <v-app>
    <div class="header center">
        <v-system-bar dark
          color="primary"
          lights-out height=40px
        >
        <div class="ml-10">
             <span class="material-icons">
call
</span>
        </div>
        <v-text name="contact" class="ml-2">+254733289935</v-text>
        <div class="ml-5">
             <span class="material-icons">
call
</span>
        </div>
        <v-text name="contact" class="ml-2">+254790139699</v-text>
        <v-spacer></v-spacer>
        <v-text name="faq" class="mr-5">FAQ's</v-text>
        <v-text name="help" class="mr-5">Need Help ?</v-text>
        </v-system-bar>
    </div>
    <Navbar/>
    </v-app>
</template>
<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
export default {
    components: {
        NavBar,
        Footer,
        Logo
    }
}
</script>
<style scoped>

.container {
    width: 150px;
    margin-top: 100px;
    margin-left: 50px;
}
</style>