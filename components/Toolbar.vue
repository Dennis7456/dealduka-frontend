<template>
	<div class="toolbar">
		<a-row type="flex" align="middle" justify="space-between" class="row">
				<a-col :span="6">
				<img src="../static/media/logo/logo256-web.png" alt="Logo" class="logo">
				</a-col>
				<a-col :span="12">
				<a-input-search placeholder="Search For" size="large" @search="onSearch">
      <a-button slot="enterButton">
        Custom
      </a-button>
    </a-input-search>
				</a-col>
				<a-col :span="6">
				<div class="avatar-icons">
				<a-space :size="35">
				<a-avatar :size="45" icon="user" />
				<a-avatar :size="45" icon="shopping-cart" />
				</a-space>
				</div>
				</a-col>
			</a-row>
			<a-row type="flex" align="middle" justify="space-between" class="row-two">
			<div class="dropdown">
				<a-col :span="9.6">
				<a-dropdown-button :size="100">
      Dropdown
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
      <a-icon slot="icon" type="user" />
    </a-dropdown-button></a-col>
    </div>
				<a-col :span="14.4">
				<div class="menu">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
      <a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </a-menu-item>
    </a-menu>
  </div></a-col>
			</a-row>
	</div>
</template>
<script>
export default {
	name: 'Toolbar'
}
</script>
<style scoped>
.toolbar {
	background-color: white;
}
.logo {
	height: 150px;
	width: 150px;
	margin: 20px 0px 20px 100px;
}

.avatar-icons {
	margin-left: 100px;
}

.dropdown {
	margin: 10px 0px 0px 110px;
}

.menu {
	color: #2227af;
}

.row-two {
	margin-bottom: 10px;
}
</style>