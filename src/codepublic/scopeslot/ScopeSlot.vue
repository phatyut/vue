<template>
    <div>
       <slot v-for="element in items"
             :key="element.name"
             :slotname="element.name"
             :age="element.age"
             :url="element.url">

       </slot>
    </div>
</template>
<script>
import Pc from "../../images/pc3.png"
import backgroun from "../../images/background1.jpg"
    export default{
        data(){
            return{
                items:[
                    {name:"slot1",age:11,url:Pc},
                    {name:"slot1",age:22,url:backgroun}
                ]
            }
        }
    }
</script>