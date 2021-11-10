<template>
      <a-layout-header class="header">
        <a-row type="flex" align="middle" justify="space-between" class="row">
            <a-col :span="6" class="col">
            <a-space>
                <a-icon type="phone" :rotate="90"/>
                +254733289935
                <a-icon type="phone" :rotate="90"/>
                +254791708634
                </a-space>
            </a-col>
            <a-col :span="12">
            </a-col>
            <a-col :span="6">
            <a-space size="large">
            <div>FAQ's</div>
            <div>Need Help?</div>
            </a-space>
            </a-col>
        </a-row>
      </a-layout-header>
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
    color: white;
}

.row {
    background-color: ;
    height: 40px;
    text-align: center;
    margin: -11px;
}


</style>