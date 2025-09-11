<template>
    <div>
        <div>{{ name }}</div>
        <div :class="classimg"><img src="../../images/butterfly.jpg" alt="" v-show="showimg"></div>
        <div>{{ des }}</div>
        <div><button @click="clickadditem">ADD ITEM</button></div>
       
    </div>

</template>
<script>
    export default{
        props:{
            name:{
                type:String,
                required:true
            },des:{
                type:String,
                required:true
            },url:{

            }

        },
        data(){
            return{
                showimg:this.url,
                classimg:"imgclass"
            }
        },methods:{
            clickadditem(){
                this.showimg = !this.showimg
            }
        }
    }
</script>
<style scoped>
.imgclass{
    position: relative;
    width: 100px;
    height: 60px;
}.imgclass > img{
    position: relative;
    width: 100px;
    height: auto;
}
</style>