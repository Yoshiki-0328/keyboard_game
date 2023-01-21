const app = Vue.createApp({
    data:()=>({
        message:'hello Vue.js',
        start_flag:false,
        questions:['apple','banana','orange','grape','strawberry'],
        quesiton_num:0,
        quesiton_num_view:1,
        clear:false,
        answer:""
    }),
    computed:{
        styleObj:function(){
            width = 20 * this.quesiton_num +'%'
            if(this.quesiton_num == this.questions.length){
                color = "aqua"
            }else{
                color = "orange"
            }
            return {
                "width":width,
                "background-color":color
            }
        }
    },
    methods:{
        start_clicked:function(){
            this.start_flag=true
            this.$nextTick(function(){
                document.getElementById('typeForm').focus();
            })
        }
    },
    watch:{
        answer:function(){
            if(this.questions[this.quesiton_num]==this.answer){
                this.answer=''
                this.quesiton_num++
                this.quesiton_num_view++
                if(this.quesiton_num==this.questions.length){
                    this.clear=true;
                    this.quesiton_num_view--
                }
            }
        }
    }
})
app.mount('#app');