<template>
	<div class="purchaser">
		<el-container>
			<el-header id="header">

				<div id="logo">
					采购人员
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
				<!-- 侧边栏 -->
				<el-aside width="200px">
					<NavMenu></NavMenu>
				</el-aside>

				<el-main id="mainview">
					<div id="huanying">欢迎进入教材管理系统</div>
					<!--路由出口 -->
					<router-view></router-view>


				</el-main>
			</el-container>

			<el-footer id="foot">采购人员采购界面</el-footer>
		</el-container>

	</div>
</template>

<script>
	import NavMenu from '../views/NavMenu/purmenu';

	export default {
		name: "purchaser",
		components: {
			NavMenu
		},
		methods: {
			doExit() {
				this.delCookie();
				this.$router.push("/");
			},
			delCookie() {
				var cookies = document.cookie.split(";");
				for (var i = 0; i < cookies.length; i++) {
					var cookie = cookies[i];
					var eqPos = cookie.indexOf("=");
					var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
					document.cookie =
						name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
				}
				if (cookies.length > 0) {
					for (var i = 0; i < cookies.length; i++) {
						var cookie = cookies[i];
						var eqPos = cookie.indexOf("=");
						var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
						var domain = location.host.substr(location.host.indexOf("."));
						document.cookie =
							name +
							"=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" +
							domain;
					}
				}
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

	.el-main {
		background-color: #e9eef3;
		color: #333;
		text-align: center;
		height: 450px;
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

	#mainview {
		background-color: #FFFFFF;
	}

	#huanying {
		font-size: 25px;
		color: gray;
		font-family: 宋体;
		/* font-weight: bolder; */

	}

	#foot {
		font-size: 25px;
		color: gray;
		font-family: 宋体;
		font-weight: bolder;
	}
</style>
