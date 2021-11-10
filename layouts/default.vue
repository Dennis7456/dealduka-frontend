<template>
	<div>
		<a-layout style="min-height: 100vh" breakpoint = "{
       xs: '480px',
       sm: '576px',
       md: '768px',
       lg: '992px',
       xl: '1200px',
       xxl: '1600px',
     }">
      <Topbar />
      <Toolbar />
      <a-layout-content class="content">
         <Nuxt />
      </a-layout-content>

      <Footer class="footer" />
  </a-layout>
  </div>
</template>
<script>
	import Topbar from '@/components/Topbar'
	import Toolbar from '@/components/Toolbar'
	import Footer from '@/components/Footer'

	export default {
		name: 'layout',
		components: {
			Topbar,
			Toolbar,
			Footer
		}
	}
</script>
<style scoped>

.content {
	margin: 0 16px;
	min-height: auto;
}
.footer {
	text-align: center;

}
	
</style>