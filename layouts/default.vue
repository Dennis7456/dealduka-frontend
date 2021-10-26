<template>
    <v-app>
    <div class="header">
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
    <div class="toolbar">
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex v-for="i in 3" :key="`4${i}`" xs4>
                    <v-card dark color="red">
                        <Logo />
                        <v-card-text class="px-0">4</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
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