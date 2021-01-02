
var app = new Vue({
    el: "#app",
    data:{
        message: "小亢说天气",
        city:"唐山",
        curent_city:"",
        weatherList:[]
    },
    methods: {
        searchWeather:function() {
            console.log("天气查询")
            // console.log(this.city)
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
            .then(function(response){
                console.log(response)
                // console.log(response.data.data.forecast) ;
                that.weatherList=response.data.data.forecast;
                that.curent_city=response.data.data.city;
                // console.log(that.curent_city)
                // console.log(that.weatherList)
            })
            .catch(function(err){})
        },
        changeCity:function(city){
            this.city=city;
            this.searchWeather();
        },

        },
        //页面初始化加载
        mounted() {
            console.log("qqq");
            this.searchWeather();
            
        }
})
