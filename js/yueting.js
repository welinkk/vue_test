var app = new Vue({
    el:"#app",
    data: {
        query:"许嵩",
        musicList:[],
        musicUrl:[],
        musicImageUrl:[],
        hotComments:[],
        isPlaying:false,
        mvURL:"",
        isShow:false
    },
    methods: {
        searchMusic:function() {
            
            var that= this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query)
            .then(function(response){
                 console.log(response);
                that.musicList=response.data.result.songs
                // console.log(response.data.result.songs);
            },function(err){})
        },
        playMusic:function(musicId) {
            // console.log(musicId);
            var that = this;
            //获取歌曲地址
            axios.get("https://autumnfish.cn/song/url?id="+musicId)
            .then(function(response){
                 console.log(response);
                // console.log(response.data.data[0].url)
                that.musicUrl=response.data.data[0].url;
            },function(err){})
            //获取歌曲详情(图片)
            axios.get("https://autumnfish.cn/song/detail?ids="+musicId)
            .then(function(response){
                console.log(response);
                // console.log(response.data.songs[0].al.picUrl)

                that.musicImageUrl=response.data.songs[0].al.picUrl
            },function(err){})
            // 评论
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId)
            .then(function(response){
                console.log(response);
                that.hotComments=response.data.hotComments
            },function(err){})
            
        },
        play:function(){
            console.log("play");
            this.isPlaying= true
        },
        pause:function(){
            console.log("pause");
            this.isPlaying=false
        },
        playMV:function(mvid){
            console.log(mvid)
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id="+mvid)
            .then(function(response){
                console.log(response.data.data.url);
                that.isShow=true;
                that.mvURL=response.data.data.url
            },function(err){})
        },
        // 隐藏mv
        hidd:function(){
            this.isShow=false;
        }

    },

})