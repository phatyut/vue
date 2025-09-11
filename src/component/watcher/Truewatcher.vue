<template>
    <div>
        <div><input type="text" v-model="pleaseinputgmail"></div>
        <div :class="classelement">{{ result }}</div>
    </div>
</template>
<script>

    export default{
        data(){
            return{
                pleaseinputgmail:'',
                result:"",
                classelement:'invalid'

            }
        },watch:{
          pleaseinputgmail(n,o){
            if(!n.includes('@')){
               this.result = "the @ characher that's wrong."
                this.classelement = 'invalid'
            }
            else if(!o.includes('@') && n.includes('@')){
                this.result =  "The @ charcher that's right";
                this.classelement = 'valid'
            }

          }
        }
    }
</script>
<style scoped>
.invalid{
    color: red;
}.valid{
    color: green;
    font-size: x-large;
}
</style>