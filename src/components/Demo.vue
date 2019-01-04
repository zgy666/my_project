<template>
  <div>
    <div v-for="item in demoList">我是demo</div>
    <div >{{storeCon}} {{getCount}}</div>
    <div @click="storeChange()">点击按钮</div>
    <div v-on:click="goDemo2()">
      跳转到demo2
    </div>
   </div>
</template>

<script>
    export default {
      name: "Demo",
      data(){
          return{
            demoList : [1,2,3],
            storeCon : 'ddd'

          }
      },
      created(){

        //this.storeCon = this.$store.state.storeContent;

      },
      watch:{

      },
      methods:{
        storeChange(){
          //this.$store.commit("changeCount");
          this.$store.dispatch("increment");
        },
        goDemo2 () {
          console.log("我点击了");
          this.$router.push({name:'Demo2', params:{id:"222",cou:"开始就看得见"}});
        }
      },
      props:{

      },
      computed:{
          getCount(){
            //return this.$store.state.count;
            return this.$store.getters.getState;
          }
      },
      components:{

      }

    }
</script>

<style scoped>

</style>
