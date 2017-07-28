var Recommend = {
	template:"#recommend",
	data:function(){
		return {
			num:40,
			slider:[],
			list:[]
		}
	},
	beforeCreate:function(){
		console.log(10);
	},
	created:function(){
		 me = this;

				$.ajax({
		             url:'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
		             dataType:"jsonp",
		             jsonp:"jsonpCallback",
		             success:function(data){
		                me.slider = data.data.slider;
		                console.log(data)
		             }
		        });
		        this.$http.get("data/wang1.json").then(function(res){

						this.list = res.body.data.list;

					});
	}
}

var Singer = {
	template:"#singer",
	data:function(){
		return {
			alphabet:[
						{"type":"A","num":"1","content":["阿杜", "阿宝", "安东阳", "阿木"]},
						{"type":"B","num":"2","content":["白宇", "巴图", "毕书尽", "布仁巴雅尔", "白敬亭"]},
						{"type":"C","num":"3","content":["陈奕迅", "陈小春", "陈楚生", "陈柏宇", "陈鸿宇", "陈伟霆", "陈百强", "陈学冬"]},
						{"type":"D","num":"4","content":["刀郎", "戴荃", "邓超", "大张伟", "迪克牛仔", "单良", "大哲"]},
						{"type":"E","num":"5","content":["二鬼哥","二龙湖浩哥","俄木木果"]},
						{"type":"F","num":"6","content":["方大同","费玉清","枫宇辰","范逸臣","房祖名","方磊","费翔"]},
						{"type":"G","num":"7","content":["古巨基","高进","光良","高安","郭富城","郭旭"]},
						{"type":"H","num":"8","content":["华晨宇","胡夏","韩安旭","胡彦斌","胡歌","黄子韬","海鸣威","后弦","黄勇"]},
						{"type":"I","num":"9","content":["ii八佰伴"]},
						{"type":"J","num":"10","content":["金志文","贾乃亮","姜玉阳","金贵晟","蒋敦豪"]},
						{"type":"K","num":"11","content":["可泽","坤哲","空格","柯受良","柯有伦"]},
						{"type":"L","num":"12","content":["a1","a2","a3","a4","a1","a2","a3","a4","a1","a2","a3","a4","a1","a2","a3","a4","a5"]},
						{"type":"M","num":"13","content":["a1","a2","a3","a4","a5"]},
						{"type":"N","num":"14","content":["a1","a2","a3","a4","a5"]},
						{"type":"O","num":"15","content":["a1","a2","a3","a4","a5"]},
						{"type":"P","num":"16","content":["a1","a2","a1","a2","a1","a2","a3","a4","a5"]},
						{"type":"Q","num":"17","content":["a1","a2","a3","a4","a5"]},
						{"type":"R","num":"18","content":["a1","a2","a3","a4","a5"]},
						{"type":"S","num":"19","content":["a1","a2","a3","a4","a5"]},
						{"type":"T","num":"20","content":["a1","a2","a3","a4","a5"]},
						{"type":"U","num":"21","content":["a1","a2","a3","a4","a5"]},
						{"type":"V","num":"22","content":["a1","a2","a3","a1","a2","a3","a1","a2","a3","a4","a5"]},
						{"type":"W","num":"23","content":["a1","a2","a3","a4","a5"]},
						{"type":"X","num":"24","content":["a1","a2","a3","a4","a5"]},
						{"type":"Y","num":"25","content":["a1","a2","a3","a4","a5"]},
						{"type":"Z","num":"26","content":["a1","a2","a3","a4","a5"]},
			],
			alp:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
			num:10,
			index:0,
			sum1:0
		}
	},
	methods:{
		jump:function(value){
			this.sum1 = 0;
			for(var i = 0 ; i <= this.alp.length ; i ++){
				if(this.alp[i] === value){
						this.index = i ;
				}
			};
            for(var m = 0 ; m < this.index ; m ++){
            	for(var k = 0 ; k < this.alphabet[m].content.length ; k ++){
            		this.sum1++;
            	}
            }
            window.scrollTo(0,35*this.index + 70 * this.sum1 )  ;
		}
	}
}

var Big = {
	template:"#big",
	methods:{
		go:function(){
			history.go(-1)
		}
	}
}
var Big1 = {
	template:"#big1",
	methods:{
		go:function(){
			history.go(-1)
		}
	}
}

/**
*排行榜列表页以及排行榜那跳转的页面的组件
*
*/ 
var Rank = {
	template:"#rank",
	data:function(){
		return {
			num:10
		}
	}
}

var RankDetail = {
	template:"#rankDetail",
	methods:{
		go:function(){
			history.go(-1)
		}
	}
}

var Play = {
	template:"#play"
}

var Search = {
	template:"#search",
	data:function(){
		return {
			list:[],
            s:""
		}
	},
    methods:{
            get:function(){
	                this.$http.jsonp("http://sug.music.baidu.com/info/suggestion", //跨域请求接口
	                    {
	                    params: {
	                        word:this.s,
	                        count:30
	                    },
	                    jsonp:'callback'
	                }).then(function(res){
	                	if(!res.data.error_message){
	                		console.log(111)
	                   		 this.list = res.body.data.song;
	                	}else{
	                		 this.list = []
	                	}
	                },function(){
	                    console.log("请求失败！！！")
	                });
	            }
	        }
}

var routes = [
	{path:"/recommend",component:Recommend},
	{path:"/singer",component:Singer},
	{path:"/rank",component:Rank},
	{path:"/search",component:Search},
	{path:"/big",component:Big},
	{path:"/big1",component:Big1},
	{path:"/rankDetail",component:RankDetail},
	{path:"/play",component:Play},
	{path:"/",redirect:"/recommend"}
];

var router = new VueRouter({
	routes:routes
})

// Vuex
var store = new Vuex.Store({
			state:{
			    starName:"",
			    starSong:[],
			    url:"",
			    rankArr:[],
			    query:{topid:4},
			    rank_topinfo:"",
			    rank_songlist:[],
			    nowIndex:0,
			    singerlist:[],
			    src1:'http://y.gtimg.cn/music/photo_new/T001R300x300M000',
			    src2:".jpg"
			},
			mutations:{
                starname:function(state){
	                	$.ajax({
				             url:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?',
				             data:{singerid:parseInt(Math.random()*10000)},
				             dataType:"jsonp",
				             jsonp:"jsonpCallback",
				             success:function(res){
				             	state.singerlist = res.data.list;
				             	console.log(res.data.list)
				             	}
				        })
	            },
                starname2:function(state){
	               $.ajax({
		             url:'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
		             dataType:"jsonp",
		             jsonp:"jsonpCallback",
		             success:function(data){
		                	state.rankArr = data.data.topList;
		                	console.log(state.rankArr)
		             	}
		        	})
            	},
            	rankQuery:function(state,index){

            		state.nowIndex = index;
            		
	               $.ajax({
		             url:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?',
		             data:{topid:index},
		             dataType:"jsonp",
		             jsonp:"jsonpCallback",
		             success:function(data){
		             	console.log(data)
		                	state.rank_topinfo = data.topinfo;
		                	state.rank_songlist = data.songlist;
		                	console.log(state.rank_songlist)
		             	}
		        	})
            	},
            	playlist:function(state){
            		$.ajax({
		             url:"data/ge.json",
		             success:function(data){
		             	console.log(data)
		             	}
		        	})
            	}
            }
	});
var wang = new Vue({
	el:"#app",
	router:router,
    store:store
})