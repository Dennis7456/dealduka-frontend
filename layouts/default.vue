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
    <v-row  justify="center">
      <v-col cols="12" md="4">
        <v-spacer></v-spacer>
        <v-img src="../media/logo/logo256-web.png" aspect-ratio="1" max-height="150" max-width="150" class="logo "></v-img>
    </v-col>
      <v-col cols="12" md="4" >
        <div class="search-area primary">
        <v-text-field outlined class="rounded-pill ">
            <v-icon slot="prepend">mdi-magnify</v-icon>
        </v-text-field>
    </div>
    </v-col>
      <v-col cols="12" md="4"><v-card>One of three columns</v-card></v-col>
    </v-row>
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

.logo {
    margin-left: 100px;
}

.search-area {
    border-radius: 100px !important;
    width: 500px;
}
</style>