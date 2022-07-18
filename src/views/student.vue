<template>
	<div class="fxmessager">
		<el-container>

			<el-header id="header">

				<div id="logo">
					图书订购管理界面
				</div>


				<div id="rightxiala">
					<el-dropdown>
						<el-button size="large" type="primary">
							<el-icon size="30px">
								<User />
							</el-icon>
							<el-icon size="large">
								<ArrowDownBold />
							</el-icon>
						</el-button>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link to="" @click.native="doExit()">退出登录</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>

			</el-header>

			<el-container>
				<el-aside width="200px">
					<NavMenu></NavMenu>
				</el-aside>
				<el-main>
					<router-view></router-view>
					<!--路由出口 -->
				</el-main>
			</el-container>

			<el-footer>@STOS-订购系统</el-footer>
		</el-container>

	</div>

</template>

<script>
	import NavMenu from '../views/NavMenu/stnavmenu';



	export default {
		name: "student",
		components: {
			NavMenu
		},
		methods: {
			doExit() {
				this.$router.push("/");
			}
		}


	}
</script>

<style scoped>
	.el-header,
	.el-footer {
		background-color: #FFFFFF;
		color: #333;
		text-align: center;
		height: 55px;
		line-height: 80px;
		padding: 0px;
	}

	#header {
		width: 100%;
		height: 80px;
		border-bottom: 1px solid darkgray;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 20px;
		box-sizing: border-box;
	}

	#header #logo {
		font-size: 50px;
		font-family: 宋体;
		font-weight: bolder;
		text-shadow: 1px 1px 1px gray;
	}

	#rightxiala {
		margin-top: 30px;
	}

	.el-main {
		background-color: #e9eef3;
		color: #333;
		text-align: center;
	}
</style>
