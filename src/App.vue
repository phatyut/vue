<template>
  <div :class="{ mainclass: true }">
    <!-- <div>
                <Bindclass></Bindclass>
              </div> -->

    <!-- <div> <Form></Form></div> -->

    <!-- <div><Computed></Computed></div> -->

    <div>
      <!-- <div>
                   <watcher></watcher>
                 </div> -->

      <!-- <div>
                  <Truewatcher></Truewatcher>
                 </div> -->
    </div>

    <!-- <div>
                <Sfc></Sfc>
              </div> -->
    <!-- 
              <div>
                  <Prop 
                      name=" yut"
                      :ismyfaverite="true"
                      des="This is a butterfly I my lovely ">
                </Prop>
                
              </div> -->

    <!-- <div>
                <div>
                    <Vfor v-for="element in items" :key="element.name"
                        :name="element.name"
                        :des="element.des"
                        :url="element.url">
                    </Vfor>
                </div>
                <div><button @click="clicktoremove">remove</button></div>
              </div> -->

    <!-- <div>
                <Emit></Emit>
             </div> -->

    <!-- <div>
              <fallthrow :name="yut"></fallthrow>
             </div> -->

    <!-- <div>
              <Slot v-for="slot in slots" :key="slot">
                  <template  #myslot> 
                    <div>{{ slot.name }}</div>
                    <div>{{ slot.age }}</div>
                    <div>{{ slot.gender }}</div>
                    <img :src=slot.url alt="">
                  </template>
              </Slot>
             </div> -->

    <!-- <div>
              <ScopeSlot v-slot="nameslot">
                <div>
                   {{ nameslot.slotname }},
                </div>
                <div>
                  {{ nameslot.age }}
                </div>
                <div><img :src=nameslot.url alt=""></div>
              </ScopeSlot>
             </div> -->

    <!-- <div>
      <Dynamicmain></Dynamicmain>
    </div> -->

    <!-- <div>
      <Binddynamic> </Binddynamic>
    </div> -->

    <!-- <div>
      <Teleports></Teleports>
    </div> -->

    <div>
      <Httpserver></Httpserver>
    </div>
  </div>
</template>
<script>
import Pc from "./images/background1.jpg";
import Butterfly from "./images/butterfly.jpg";
import Bindclass from "./component/Bind/Bindclass.vue";
import Form from "./component/form/Form.vue";
import Computed from "./component/computed/Comjuted.vue";
import Watcher from "./component/watcher/Watcher.vue";
import Truewatcher from "./component/watcher/Truewatcher.vue";
import Prop from "./sfc/Prop.vue";
import Vfor from "./sfc/for/Vfor.vue";
import Emit from "./sfc/emit/Emit.vue";
import Fallthrow from "./codepublic/fallthrow.vue";
import Binddynamic from "./dynamic-public/Binddynamic.vue";

export default {
  components: {
    Bindclass,
    Form,
    Computed,
    Watcher,
    Truewatcher,
    Prop,
    Vfor,
    Emit,
    Fallthrow,
    Binddynamic,
  },
  data() {
    return {
      bool: true,
      yut: "phatyut",
      items: [
        { name: "one", url: Butterfly, des: "this is a butterfly one " },
        { name: "two", url: Butterfly, des: "this is a butterfly two" },
      ],
      slots: [{ name: "slot", age: 12, gender: "male", url: Pc }],
    };
  },
  methods: {
    clicktoremove() {
      this.items.splice(1, 1);
      alert("test");
    },
  },
};
</script>
<style scoped>
.mainclass {
  position: relative;
  margin: 0px;

  box-sizing: border-box;
}
</style>

<!-- scope slot -->
