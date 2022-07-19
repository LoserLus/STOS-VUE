<template>

	<el-table :data="tableData">
		<el-table-column prop="jsId" label="进书单号" />
		<el-table-column prop="isbn" label="书号" />
		<el-table-column prop="cgTotal" label="现缺书数" />
		<el-table-column label="采购数量" align="center">
			<template inline-template v-slot="scope">
				<el-input-number v-model="caigouData.cgNumber" :min='0' :max="9999"
					@change="changedMatNum(scope.$index,$event,scope.row)" placeholder="请输入数量">
				</el-input-number>
			</template>
		</el-table-column>

		<el-table-column prop="buybutton" label="操作">
			<template #default="scope">
				<el-button @click="caigou()">采购</el-button>
			</template>
		</el-table-column>

	</el-table>

</template>
<script>
	import axios from "axios"

	export default {
		name: 'jslist',
		data() {
			return {
				
				tableData: [{
					isbn: '',
					cgTotal: '',
					jsId: ''
				}],

				caigouData: [{}]
			}
		},
		methods: {
			changedMatNum(index, even, row) {

				console.log("cgNumber" + even + "    isbn=" + row.isbn + "    jsId=" + row.jsId);

				this.caigouData[0].cgNumber = even;
				this.caigouData[0].isbn = row.isbn;
				this.caigouData[0].jsId = row.jsId;

				console.log(this.caigouData);

			},
			caigou() {
				console.log(this.caigouData);
				const that = this
				axios({
					method: 'post',
					url: '/api/cgMessager/purchase',
					headers: {
						'Content-Type': 'application/json' //传递数据为json时必须加上,否则服务器不识别报415
					},
					data: that.caigouData
				}).then(function(response) {
					console.log(response);
					location.reload();
				})
				alert('采购成功')
				
			}
		},

		created() {
			// console.log(sessionStorage);

			const that = this;
			axios({
				method: 'get',
				url: 'api/cgMessager/getJsList',
			}).then(function(response) {
				let list = eval(response.data);
				// console.log(list.data);
				that.tableData = list.data;

				for (let i = 0; i < that.tableData.length; i++) {
					if (that.tableData[i].cgFlag == 1)
						delete that.tableData[i];
				}
				// console.log(this.tableData);
			})
		},
		
	}
</script>


<style scoped>

</style>
