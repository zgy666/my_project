<template>
  <div>
    <div>我是demo2</div>
    <div>{{$route.query.id}}</div>
    <div>{{id}}</div>
    <div>{{id}}</div>
  </div>
</template>

<script>
    export default {
      name: "Demo2",
      data(){
        return{

        }
      },
      created(){

        this.$axios.get("url", {params:{"get请求对应的参数":""}})
          .then(res => {

          })
          .catch(error => {

          });


        let ll = this.$route.params.id;
        console.log("ll", ll);

      },
      props:{
        id:{
          type:Number,
          default:111111
        }
      },
      watch:{

      }


    }
</script>

<style scoped lang="less">

</style>
