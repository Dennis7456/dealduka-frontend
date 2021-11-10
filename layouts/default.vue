<template>
	<div>
		<a-layout style="min-height: 100vh">
      <Topbar />
      <a-layout-content style="margin: 0 16px">
        <div style="min-height: auto;">
         <Nuxt />
        </div>
      </a-layout-content>
      <a-layout-footer class="footer">
        Deal Duka | Web Mastaz ©2021 Created by Ant UED
      </a-layout-footer>
  </a-layout>
  </div>
</template>
<script>
	import Topbar from '@/components/Topbar'
	import Drawer from '@/components/Drawer'

	export default {
		name: 'layout',
		components: {
			Drawer,
			Topbar
		}
	}
</script>
<style scoped>

.footer {
	text-align: center;

}
	
</style>