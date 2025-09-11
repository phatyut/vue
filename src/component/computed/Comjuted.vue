<template>
    <div>
        <div><input type="checkbox" v-model="bool">{{ result }}</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                bool:true

            }
        },computed:{
            result(){
                if(this.bool){
                    return "Yes"
                }else return "No"
            }
        }
    }
</script>