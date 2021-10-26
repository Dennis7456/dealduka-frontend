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
        <v-text class="ml-2">+254733289935</v-text>
        <div class="ml-5">
             <span class="material-icons">
call
</span>
        </div>
        <v-text class="ml-2">+254790139699</v-text>
        <v-spacer></v-spacer>
        <v-text class="mr-5">FAQ's</v-text>
        <v-text class="mr-5">Need Help ?</v-text>
        </v-system-bar>
    </div>
    
    </v-app>
</template>
<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
    components: {
        NavBar,
        Footer
    }
}
</script>
<style scoped>
</style>