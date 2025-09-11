<template>
    <div>
        <div>
            <form action="" @submit.prevent="clicktoadditem">
                <div>Name: <input type="text" v-model="inputname" required></div>
                <div>AGE: <input type="text" v-model="inputage" required></div>
                <div>Important : <input type="checkbox" v-model="inputimportant">{{ outputimportant }}</div>
                <div><button type="submit">Add Item</button></div>
            </form>
        </div>
        <hr>

        <div v-for="item in items" :key="item" :class="test">
               <div :class="{classelement:item.important}"
                @click="item"
                v-show="showelement ">
                        {{ item.name }},{{ item.age }}
                </div>
        </div>
       
    </div>
</template>
<script>
    export default{
        data(){
            return{
                test:"testing",
                inputimportant:false,
                // elementclass:true,
                showelement:true,
                items:[
                    {name:"Yut" ,age :12,important:false ,showelement:true,showelement1:false}
                ]
            }
        },methods:{
            clicktoadditem(){
               let user ={
                name:this.inputname,
                age:this.inputage,
                important:false,
                showelement:true,
                showelement1:false
               };
               this.items.push(user);
               this.inputname="";
               this.inputage=null;
               this.inputimportant=false
            },
            clickitemelement(){
                this.showelement = false
            }
        },computed:{
            outputimportant(){
                if(this.inputimportant){
                    return "yes";
                }else return "no"
            }
        }
    }
</script>
<style scoped>
.testing{
    /* background-color: red; */
    padding: 5px;
   /* border-bottom:3px solid blue; */
   display: flex;    
}
:hover.classelement{
        background-color: blue;
        cursor: pointer;
}
</style>