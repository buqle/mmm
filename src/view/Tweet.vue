<template>
    <div>
      <button type="button" class="el-button el-button--warning" @click="shuffle" >MOVE</button>
      <transition-group name="arr" tag="div">
      <dl v-for="item in arr" :key="item.id">
        <dt><img :src="item.img" alt=""></dt>
        <dd>
          <h6>{{item.name}}</h6>
          <p>{{item.handle}}</p>
          <p>{{item.tweet}}</p>
          <p>{{item.likes}}</p>
        </dd>
        <el-input
          placeholder="请输入内容"
          clearable>
        </el-input>
      </dl>
      </transition-group>
      <h2>{{fullname(first,last).name}}</h2>
     <ul>
       <li v-for="item in actArr">
         <router-link :to="{name:'act',params:{id:item.id,name:item.loanIdentityName}}">
           <p>{{item.loanTitle}}</p>
         </router-link>

       </li>
     </ul>
      <h4>{{getname}}</h4>
      <!--v-on的修饰符-->
      <div>
        <h4>.stop阻止冒泡</h4>
        <p @click="stopFun1">
          <button type="button" class="el-button el-button--warning" @click.stop="stopFun2" >阻止冒泡</button>
        </p>
        <h4>captrue从外到内捕捉事件</h4>
        <p @click.capture="capout">
          <button type="button" class="el-button el-button--warning" @click.capture="capmiddle" >阻止冒泡</button>
        </p>
        <h4>.self只会触发自己范围内的事件</h4>
        <p @click.self="selfout" style="border: 1px solid salmon">
          <button type="button" class="el-button el-button--warning" @click.self="selfout2">触发自身</button>
        </p>
        <p class="flex" flexcont>
          <button>1</button>
          <button>2</button>
        </p>
      </div>
      <div class="wacth">
        <load-more tip="正在加载中" v-if="isload"></load-more>
        <input type="text" v-model="search">

        <ul>
          <li v-for="item in newName">{{item}}</li>
        </ul>
      </div>
     <div>
       <h2>动态绑定样式</h2>
       <p style="width: 200px;height: 100px;" :style="{'background':color}"  @click="changeColor"></p>
       <p :style="styles"></p>
       <h4>数组形式绑定样式 morestyles里绑定的样式优先于取他</h4>
       <p :style=[stylesFun,moreStyles]></p>
     </div>
      <div>
        <h2>动态绑定类名</h2>
        <p v-for="item in arring" :class="{circles:item.isround,square:!item.isround}"></p>
        <p v-for="(item,index) in arr2" :class="[item.classnames,item.direction?item.direction:'']">{{index}}</p>
      </div>
      <ul style="margin-top: 40px;">
        <li v-for="(item,index) in arr3" :class="{on:item.classon}" @click="allCheck(index,item.classon)">1</li>
      </ul>
      <div>
        <h2>过滤器</h2>
        <p>售价{{age|usd}}</p>
      </div>
      <h4>vue中的过滤器</h4>
      <ul>
        <li v-for="item in articles">
          <h2><a :href="item.link">{{item.title}}</a></h2>
          <p>{{item.content|readMore(50,'...')}}</p>
          <p><a :href="item.link">阅读更多</a></p>
        </li>
      </ul>
      <h4>串联过滤器</h4>
      <p>{{844.44256|tofixed(2)|tousd}}</p>
    </div>
</template>

<script>
  import {LoadMore} from 'vux'
  //es6数组的结构对变量赋值
  /*let [a,b,c]=[1,2,3];
  console.log(a,b,c);
  let [foo,[[bar],baz]]=[1,[[2],3]];
  console.log(`嵌套的${bar}`);
  let [head,...tail]=[1,2,3,4];
  console.log(`省略的tail是一个数组${tail}`);
  let [x,y,...z]=['a'];
  console.log(`x是${x},y是${y}，z是${z}`);
  //解构赋值允许指定默认值
  //只有等号右侧严格等于undefined时默认值才会生效 如没有值就是undefined
  let [d='123']=[];
  console.log(`DDD ${d}`)
  let [e='laowangba']=['wangLao'];
  console.log(`EEE是${e}`)


  //对象的解构赋值
  //对象的解构赋值与数组的区别:1.数组元素按次序排列，变量取值由顺序决定，对象没有次序 2.对象取值变量必须与属性同名
  let {foos,bars}={foos:'aaa',bars:'mmm'};
  console.log(`FOOS ${foos}`)
//如果变量名与属性名不一致写法：
  let {foos2:baz2}={foos2:'efg',bars2:'lmmmm'};
  console.log(`baz2  ${baz2}`)

*/
  export default {
    components:{LoadMore},
      //for循环如果不加key的话vue节点不会创建唯一的绑定，在这里文本框输入了文字后在打乱顺序文本框内容不会随着节点移动
     created(){
       let arrs=[
         {
           id:1,
           name:'James',
           handle:'@jokerjames',
           img:'https://semantic-ui.com/images/avatar2/large/matthew.png',
           tweet:'I am busy!!!',
           likes:10

         },
         {
           id:2,
           name:'Ari',
           handle:'@arianna@cat',
           img:'https://semantic-ui.com/images/avatar2/large/molly.png',
           tweet:'I am busy!!!',
           likes:'1.5M'
         },
         {
           id:3,
           name:'Troye',
           handle:'@troye@babe',
           img:'https://semantic-ui.com/images/avatar2/large/elyse.png',
           tweet:'I am busy!!!',
           likes:'1.5M'
         }
       ];
       this.arr=arrs;
       this.$http({
         url: `api/trade/loan/loanList`,   //ES6语法，引入组件内的 route object（路由信息对象）
         method: 'get',
         params:{
           showPage:1,//参数
           pageSise:15,ivstCategory:5
         },
       })
         .then( (response) => {
           //data格式下访问
           this.actArr=response.data.list;
           //console.log(response.data.list.activeName)
         })
         .catch(function (error) {
           console.log(error);
         });
     },
      data(){
       return{
         arr:[],
         first:'L',
         last:'MM',
         actArr:[],
         name2:'lmm',age:22,
         search:'',isload:false,
         names:['ari','troye','niki'],
         color:'red',
         styles:{
           'background':'green',
           width:'200px',height:'200px'
         },
         moreStyles:{
           'border-radius':'8px',background:'#ccc'
         },
         arring:[
           {
             isround:true
           },
           {
             isround:false
           }
         ],
         arr2:[
           {classnames:'c1',direction:'top'},
           {classnames:'c2'}
         ],
         arr3:[
           {classon:true},
           {classon:false}
         ],
         articles:[
           {
             title:'css:focus-within',
             content:'css的世界真是一个神奇的世界。可能众多前端开发者听说过:focus并未听说过:focus-within。那么:focus-within是什么鬼。这篇文章，我们就说说:focus-within这个东东。在CSS中:focus-within是一个伪类，现在已经被列入到CSS选择器中（CSS Level 4 selector）。他就像你知道的:focus或者:hover。:focus-within能非常方便处理获取焦点状态。当元素本身或其后代元素获得焦点时，:focus-within伪类的元素就会有效。',
             link:'//www.w3cplus.com/css/focus-within.html'
           },
           {
             title:'Vue真的很强大',
             content:'css的世界真是一个神奇的世界。可能众多前端开发者听说过:focus并未听说过:focus-within。那么:focus-within是什么鬼。这篇文章，我们就说说:focus-within这个东东。在CSS中:focus-within是一个伪类，现在已经被列入到CSS选择器中（CSS Level 4 selector）。他就像你知道的:focus或者:hover。:focus-within能非常方便处理获取焦点状态。当元素本身或其后代元素获得焦点时，:focus-within伪类的元素就会有效。',
             link:'//www.w3cplus.com/css/focus-within.html'
           }
         ]
       }
      },
      methods:{
       shuffle(){
         this.arr=_.shuffle(this.arr)//shuffle打乱数组顺序
        },
        fullname(firstname,lastname){
         return{
           name:firstname+''+lastname
         }
        },
        stopFun1(){
         alert('第一个事件');
         const arrv='123'//const声明一个常量 声明后不能更改常量的值 所以必须在初始阶段就赋值 与let作用域相同 只在块级内有效
        },
        stopFun2(){
          alert('里面的事件')
        },
        capout(){
         alert('第一个事件')
        },
        capmiddle(){
         alert('内部事件')
        },
        selfout(){
         alert('调用了自己1')
        },
        selfout2(){
          alert('调用了自己2')
        },
        changeColor(){
          if(this.color=='red'){
            this.color='blue';
          }else {
            this.color='red'
          }
        },
        allCheck(index,cc){
         if(cc){
           return false
         }
         this.arr3.map(function (v,i) {
           console.log('这是I'+i)
           console.log('这是Index'+index)
           i==index?v.classon=true:v.classon=false
         })
        }
      },
    computed:{
      getname(){
        return `名字:${this.name2}-${this.age}`
      },
      newName(){
        let filer=new RegExp(this.search,'i');
        return this.names.filter(el=>el.match(filer))
      },
      stylesFun(){
        let h=200;
        return{
          background:'blue',
          width:(h/2)+'px',
          height:h+'px'
        }
      }

    },
    watch:{
      search(q){
        this.isload=true;
        setTimeout(()=>{
          this.isload=false
        },500)
      }
    },
    filters:{
      usd(val){
        return `$${val}`
      },
      readMore(val,length,suffix){
        return val.substring(0,length)+suffix
      },
      tofixed(val,lenth){
        return val.toFixed(lenth)
      },
      tousd(val){
        return `$${val}`
      }
    }
    }
</script>

<style scoped>
  [flexcont]{d:flex}
  .flex{
    w:300px;button{p:10px 20px;bd:none;}
  }
  dl{
    d:flex;m:10px 0;bg:#ccc;
    img{size:120px 120px!important;}

  }
  .arr-move{ transition: transform 1s; }
  .circles{w:200px;h:300px;border-radius: 50%;background: #8cc5ff;}
  .square{w:100px;h:100px;background: #c2e7b0}
  li.on{c:red;}
</style>
