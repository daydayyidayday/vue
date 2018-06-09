// JavaScript Document
var vm =new Vue({
	el:"#app",
	data:{
		totalMoney:0,
		productList:[]
	},
	filters:{
		
	},
	mounted:function(){
		this.$nextTick(function () {
			this.cartView();
		})
		
	},
	methods:{
		cartView:function(){
			var _this = this;
			axios.get("data/cartData.json",{"id":123}).then(function(response){
				console.log(response);
				_this.productList = response.data.result.list;
				_this.totalMoney = response.data.result.totalMoney;
			});
		}
	}
})