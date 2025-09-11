<template>
    <div>
        <div :class="{classforelement:element}" @mousemove="moveoverelement" :style="{backgroundColor:'hsl('+xpos+',50%,50%)'}">
            {{ xpos }}
            {{ ypos }}
        </div>
<hr>
        <div>
            <input type="text"> 
        </div>
        <div>
            {{ showgmail }}
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            element:true,
            xpos:0,
            ypos:0
        }
    },methods:{
        moveoverelement(events){
            this.xpos = events.offsetX;
            this.ypos = events.offsetY;
        }
    }
}
</script>
<style scoped>
.classforelement{
    position: relative;
    width: 400px;
    height: 400px;
    /* background-color: blue; */
    font-size: 30px;
    color: white;
    cursor: pointer;
}
</style>