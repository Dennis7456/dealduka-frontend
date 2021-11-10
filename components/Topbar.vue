<template>
	 <a-layout breakpoint = "{
       xs: '480px',
       sm: '576px',
       md: '768px',
       lg: '992px',
       xl: '1200px',
       xxl: '1600px',
     }">
      <a-layout-header class="header">
        <a-row type="flex" align="middle" justify="space-between" class="row">
            <a-col :span="6" class="col">
            <a-space>
                <a-icon type="phone" :rotate="90"/>
                <a-text>+254733289935</a-text>
                <a-icon type="phone" :rotate="90"/>
                <a-text>+254791708634</a-text>
                </a-space>
            </a-col>
            <a-col :span="12">
            </a-col>
            <a-col :span="6">
            <a-space size="large">
            <a-text>FAQ's</a-text> 
            <a-text>Need Help?</a-text> 
            </a-space>
            </a-col>
        </a-row>
      </a-layout-header>
     </a-layout>
</template>
<script>
	export default {
  name: 'TopBar',
};
</script>
<style scoped>
.header{
    background-color: #0f3460;
    height: 40px;
}

.row {
    background-color: ;
    height: 40px;
    text-align: center;
    margin: -11px;
}


</style>