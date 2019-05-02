<template lang="pug">
  .home
    .container-leftside
      select#optionchoice(@change='fliter(newItem)' v-model="newItem")
        option(value="" selected="selected" ) --請選擇行政區--
        option(v-for="item in zone" :value="item"  selected) {{item}}
      h2 熱門行政區
      hr
      .button(vlaue='全部' @click="fliter('')" style="background-color:#FFA782 ") 全部
      .button(vlaue='苓雅區' @click="fliter('苓雅區')" style="background-color:#8A82CC") 苓雅區
      .button(vlaue='三民區' @click="fliter('三民區')" style="background-color:orange") 三民區
      .button(vlaue='新興區' @click="fliter('新興區')" style="background-color:#038063") 新興區
      .button(vlaue='鹽埕區' @click="fliter('鹽埕區')" style="background-color:#559AC8") 鹽埕區
    .container-rightside
      h1(v-if="newItem == ''") 高雄旅遊資訊
      h1(v-else) {{ newItem }}
      span.titleicon
        img(src="@/assets/practice/icons_down.png")
      .item-content
        travelCard(
          v-for="item in fliter(newItem)"
          :title="item.Name"
          :img="item.Picture1"
          :time="item.Opentime"
          :address="item.Add"
          :phone="item.Tel"
          :free="item.Ticketinfo"
        )
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import travelCard from '@/components/travelItem.vue'

export default {
  name: 'home',
  data(){
    return {
      newItem:'',
      listData:[],
      zone:[],
    }
  },
  components: {
    HelloWorld,
    travelCard,
  },
  mounted(){
    this.$nextTick(()=>{
       this.GetData();
    })
  },
  methods:{
    //https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97 高雄觀光局資料
    GetData: function() {
      this.$http.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
      .then((response) => {
        /* 成功拿到資料，然後... */
        this.listData = response.body.result.records
        // 製作分類
        this.zoneChoice();
      })
      .catch((response) => {
        alert('目前沒有提供任何資料');
      })
      .finally(() => {
        /* 不論成功失敗，都做些事 */
      });
    },
    selectChoice: function(){

    },
    zoneChoice: function(){
        this.listData.forEach((item,key)=>{
          if(this.zone.indexOf(item.Zone) == -1) {
            this.zone.push(item.Zone);
          }
          return;
        });
      console.log(this.zone);
    },
    fliter: function (val){
      let result = [];
      this.newItem = val
      this.listData.map((item)=>{
        if(item.Zone == this.newItem.trim()){
          result.push(item);
        };
      });
      if(this.newItem.trim() == ""){
        result = this.listData;
      }
      return result;
      console.log(result);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
