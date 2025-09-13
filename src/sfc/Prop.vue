<template>
    <div :class="{classbind:bindclass}">
        <div>{{ name }}</div>
        <div>{{ des }}</div>
        <div :class="classimg" ><img src="../images/butterfly.jpg" alt="" v-show="showmyfaverite" ></div>
        <div><button @click="clickaddimg">ADD</button></div>
    </div>
</template>
<script>

export default{
    props:{
             name:{type:String,required:true},
             des:{type:String,required:true},

            },
    data(){
        return{
            classimg:"imgclass",
            bindclass:true,
            showmyfaverite:this.ismyfaverite
        }
    },methods:{
        clickaddimg(){
            this.showmyfaverite = !this.showmyfaverite
        }
    }
}
</script>
<style scoped> 
.imgclass{
     position: relative;
    width:100px;
    height: 60px;
    display: table;
    border:1px solid red;
}
.imgclass img{
    position: relative;
    width:100px;
    height: auto;
    display: table;
    border:1px solid red;
}:hover > .imgclass >  img {
    background-color: yellow;
    padding: 5px;
 
}.classbind{
    border: 1px solid red;
}
</style>