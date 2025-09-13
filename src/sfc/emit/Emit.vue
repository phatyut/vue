<!-- Parent.vue -->
<!--
// <template>
//   <div>
//     <Childemit :showbutterfly="butterfly" @clickme="clicktoalert" />
//   </div>
// </template>

<script>
import Childemit from './childemit.vue';

export default {
  components: { Childemit },
  data() {
    return {
      butterfly: true
    };
  },
  methods: {
    clicktoalert() {
      this.butterfly = !this.butterfly;
    }
  }
};
</script>-->
<template>
    <div>
        <Childemit v-for="element in items" 
        :key="element"
        :name="element.name"
        :des="element.des"
        :imgshow="element.imgshow"
        @clickme="meclick"></Childemit>
    </div>
</template>
<script>
import Childemit from "../../sfc/emit/childemit.vue"
export default {
    components:{Childemit},
    data(){
        return{
            items:[
                {name:"yut",des:"this is a name",imgshow:true}
            ]

        }
    },methods:{
        meclick(index){
            alert(index)
        }
    }
}
</script>
