<template>
<v-container fluid grid-list-24>
    <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex xs12 md4>
            <Logo/>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 md4>
            <v-text-field outlined></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 md4>
            <v-icon></v-icon>
            <v-icon></v-icon>
        </v-flex>
        <v-spacer></v-spacer>
    </v-layout>
</v-container>
</template>
<script>
import Logo from '@/components/Logo'
export default {
    components: {
        Logo
    }
}
</script>
<style scoped>
</style>