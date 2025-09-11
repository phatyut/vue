<template>
    <div>
        <div :class="{classforelement:element}" @mousemove="moveoverelement" :style="{backgroundColor:'hsl('+xpos+',50%,50%)'}">
            {{ xpos }}
            {{ ypos }}
        </div>
<hr>
       
    </div>
</template>
<script>
export default{
    data(){
        return{
            element:true,
            inputaddress:'',
            showgmail:'',
            xpos:0,
            ypos:0,
            myclass:"classelement"
        }
    },methods:{
        moveoverelement(events){
            this.xpos = events.offsetX;
            this.ypos = events.offsetY;
        }
    },watch:{
        inputaddress(newvalue,oldvalue){
            if(!newvalue.includes('@')){
                this.showgmail=" input your gmail invalid"
            }
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
}.classelement{
    color:red
}
</style>