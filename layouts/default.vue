<template>
    <v-app>
    <div>
        <v-system-bar dark
          color="primary"
          lights-out height=40px
        >
        <div class="phone-icon-left1">
             <span class="material-icons">
call
</span>
        </div>
        <v-text class="text-left1">+254733289935</v-text>
        <div class="phone-icon-left2">
             <span class="material-icons">
call
</span>
        </div>
        <v-text class="text-left1">+254790139699</v-text>
        <v-spacer></v-spacer>
        <v-text class="text-right-1">FAQ's</v-text>
        <v-text>Need Help ?</v-text>
        </v-system-bar>
    </div>
    </v-app>
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
<style scoped>
.phone-icon-left1 {
    margin-left: 80px;
    margin-top: 10px
}

.text-left {
    margin-left: 10px;
}

.phone-icon-left2 {
    margin-left: 30px;
    margin-top:10px;
}

.text-right-1 {
    margin-right: 250px;
}
</style>