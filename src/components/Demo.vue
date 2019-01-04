<template>
  <div>
    <div v-for="item in demoList">我是demo</div>
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
            demoList : [1,2,3]
          }
      },
      created(){

      },
      watch:{

      },
      methods:{
        goDemo2 () {
          console.log("我点击了");
          this.$router.push({name:'Demo2', params:{id:"222",cou:"开始就看得见"}});
        }
      },
      props:{

      },
      computed:{

      },
      components:{

      }

    }
</script>

<style scoped>

</style>
