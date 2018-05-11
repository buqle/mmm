<template>
    <div class="node">
      <h1 v-hello>{{mess}}</h1>
      <p v-demo="{names:'lmm',ages:'22'}">
        自定义组件传输多个参数使用js对象格式
      </p>
      <transition name="modal-toggle">
        <!--transition是vue自身封装的组件 添加离开进入动画效果-->
        <p v-show="modalOpen">
          打开后第一个input框自动获取焦点了
          <input type="text" v-for="(item,index) in arr" v-focuses="index===0" :placeholder="item">
        </p>
      </transition>
      <button type="button" class="el-button el-button--warning" @click="toggleModals" >{{butText}}</button>
      <div>
        <textarea v-model="cont" v-maxchars="140"></textarea>
        <p>您还可以输入{{reduceCount}}字</p>
      </div>
      <div :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" @mousemove="colors">
        <button type="button" class="el-button el-button--warning" @click="add">+</button>
        {{counter}}
        <button type="button" class="el-button el-button--warning" @click="jian">-</button>
        <p>pixels across：{{x}}</p>
      </div>
      <svg width="100%" height="200">
        <!--
        rect为矩形
        id该矩形的名称 也可以用class命名
        fill矩形填充的颜色
        stroke矩形的边框颜色
        stroke-width矩形边框的粗细
        width矩形的宽度
        height矩形的高度
        rx实现圆角效果时，圆角沿X轴的半径
        ry实现圆角效果时，圆角沿Y轴的半径
        -->
        <rect height="100%" width="100%" fill="blue"></rect>
        <circle r="80" cx="50%" fill="green" cy="100"></circle>
        <text x="50%" y="125" font-size="60"  text-anchor="middle" fill="#fff">SVG</text>
      </svg>
      <svg width="600" height="300">
        <rect height="80" width="80" id="A" x="30" y="30" fill="#ff6cc4" stroke="#c30d23" stroke-width="4"></rect>
        <rect height="80" width="80" id="B" fill="#ff6cc4" x="100" y="100"></rect>
        <rect height="80" width="80" id="C" fill="green" x="30" y="140"></rect>
        <rect height="80" width="80" id="D" fill="#ff6cc4" x="100" y="180" stroke="#6EA9FF" stroke-width="4" rx="10" ry="10"></rect>
      </svg>
      <!--
      circle圆形
      cx圆心在X轴上的坐标
      cy圆心在y轴上的坐标
      r圆的半径
      rx
      ry
      -->
      <svg width="300" height="300">
        <g>
          <circle  id="yuan" stroke-width="4" stroke="#ccc" fill="#bf10eo" cx="100" cy="100" r="80"/>
        </g>

        <!--
        椭圆 ellipse
        rx:椭圆在x轴的半径
        ry：椭圆在y轴的半径
        cx：椭圆圆心在x轴的坐标
        cy：椭圆圆心在y轴的坐标
        -->
        <g>
          <ellipse rx="50" ry="25" fill="#e54c4c" cx="100" cy="100"/>
          <ellipse rx="80" ry="80" fill="#ccc" stroke="#ff6cc4" cx="120" cy="160" stroke-width="6"/><!--当cy和cx值相同就绘制出一个圆形-->
        </g>
        <!--
          多边形polygon绘制
          关键属性points
          多边形的绘制主要是点，每个点具有一个从标x轴和y轴
          如果绘制三角形那么就有三个点，表示points有三个值 x轴和y轴之前用逗号分隔 每个点之间用空格符分隔
        -->

        <g>
          <polygon fill="#d271ff" points="100,56 62,107 37,49"/>
        </g>
        <g>
          <!--
          path属性可以绘制任何矢量图
          d属性里的值大写为绝对定位 小写为相对定位
          M/m 起始点坐标 俩个参数x和y用逗号分隔
          H/h从当前坐标点化水平线到x轴的某个坐标点 只有一个参数 x值越大越往左，数字越小越往右
          V/v从当前坐标画垂直线到y轴某坐标点 只有一个参数 y值越大越往下 越小越往上
          L/l从当前点绘制直线到某个坐标 俩个参数x和y
          C/c绘制曲线 有六个参数x1、y1表示第一个控制点，x2、y2表示第二个控制点，x，y不表示结束点
          S/s在原本C绘制的曲线点后面建立一个带有曲线控制点的点 将原本点以同样的曲线镜射出一个曲线控制点
          -->
          <path d="M10,10 H50 V40 L80 80" stroke="#ccc" stroke-width="4" fill="#d27cd4"></path>
          <path d="M0 0 C40 40,60,40,100 0" stroke="#ddd" fill="none"  stroke-width="2"/>

        </g>

      </svg>
      <div style="margin-top:20px;">
        <svg>
          <g>
            <path d="M0 0 C40 40,60 40,100,0 S150 -40, 200 0" stroke="red" stroke-width="2" fill="none"/>
            <path d="M0 0 Q50 50, 100 0 T200 0" stroke="black" fill="none"/>
          </g>
        </svg>
      </div>
      <input type="text" v-model="findNmae">
      <ul>
        <li v-for="item in filterNames">{{item}}</li>
      </ul>
      <!--使用svg制作条形统计图-->
      <select v-model="selected">
        <option v-for="option in options" :value="option.val">{{option.text}}</option>
      </select>
      <svg viewBox="0 0 400 400"><!--viewBox值解读 x轴 y轴 width height-->
        <g targetVal="targetVal" class="xaxis">
          <line x1="0" y1="1" x2="350" y2="1"/>
          <g v-for="(select,index) in targetVal">
            <!--x1起点的x轴坐标 y1起点的y轴坐标 x2终点的x轴坐标 y2终点的y轴坐标-->
            <line v-bind="{'x1':index*10,'x2':index*10}" y1="0" y2="7"/>
            <text v-if="index%5==0" v-bind="{'x':index*10,'y':20}">{{index}}</text>
          </g>
        </g>

        <g class="left">
          <line x1="0" y1="1" :x2="getMax" y2="1"/>
          <g v-for="n in getMaxRange">
            <line y1="0" y2="7" v-bind="{'x1':n*10,'x2':n*10}"/>
            <text v-if="n%5===0" v-bind="{'x':getMax-(n*10)-5,'y':20}">
              {{n}}
            </text>
          </g>
        </g>

      </svg>
    </div>
</template>

<script>
   export default {
      data(){
        return{
         arr:['姓名','邮箱','地址','电话'],
          modalOpen:false,
          cont:'',totalCount:140,
          counter:0,x:0,
          findNmae:'',
          names:['Ari','Troye','John'],
          selected:[25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15],
          targetVal:[25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15],
          options:[
            {
           text:'First Datase',val:[25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15]
          },
            {
              text:'Second Datase',val:[25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15]
            },
            {
              text:'Third Datase',val:[25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15]
            }

          ]
        }
      },
      methods:{
        toggleModals(){
          this.modalOpen=!this.modalOpen
        },
        add(){
          this.counter++
        },
        jian(){
          this.counter--
      },
        colors(e){
          this.x=e.clientX
          console.log(this.x)
        }
      },
      computed:{
        butText(){
          return this.modalOpen?'关闭':'打开'
        },
        reduceCount(){
          if(this.totalCount>this.cont.length){
            return this.totalCount-this.cont.length
          }else {

            return 0
          }

        },
        filterNames(){
          let filer=new RegExp(this.findNmae,'i')//i修饰符用于执行不区分大小写\
          return this.names.filter(el=>el.match(filer))
        },
        getMax(){
          return Math.max.apply(Math,this.selected)*10
        },
        getMaxRange(){
          let maxi=Math.max.apply(Math,this.selected);
          return _.range(maxi);
        }
      },
        directives:{
          hello:{
            bind(el){
              console.log(el.parentNode)
              console.log('触发bind钩子函数,第一次绑定到元素上调用')
            },
            inserted(el){
              console.log(el.parentNode)
              console.log('被绑定元素插入父节点调用，触发inserted函数')
            },
            update(el,oldValue){
              console.log(el.innerHTML)//组件更新前
              console.log('所在组件的vnode更新时调用,触发update函数')
            },
            componentUpdated(el){
              console.log(el.innerHTML)//组件更新后
              console.log('所在组件的vnode及其子元素的vnode全部更新时调用 触发componentUpdate')
            },
            unbind(el){
              console.log('只调用一次 指令与元素解绑时调用,触发unbind函数')
            }
          },
          demo:{
            bind(el,binding){
              el.innerHTML=binding.value.ages
              console.log(binding.value.names)
              //this.age=binding.value.ages;
            }
          },
          focuses:{
            componentUpdated(el,binding,vnode){
              console.log('更新了')
              if(binding.value){
                //当binding.value绑定的值为true，文本框自动获取焦点
                el.focus();
              }
            }
          },
          maxchars:{
            bind(el,binding,vnode){
              let maxchars=binding.expression;
              let handler=e=>{
                if(e.target.value.length>maxchars){
                  e.target.value=e.target.value.substr(0,maxchars)
                }
              };
              el.addEventListener('input',handler);//addEventListener可以多次绑定同一个事件
            }
          }
        },
      props:{
          mess:String
      }

    }
</script>

<style scoped>
  .modal-toggle-enter-active,
  .modal-toggle-leave-active {
    transform: scale(1);
    transition: transform 0.3s;
  }

  .modal-toggle-enter,
  .modal-toggle-leave-to {
    transform: scale(0);
  }
  svg{
    w:400;
    text{
      fill: grey;

    }
  }
  line{
    stroke: #555;stroke-width: 2px;
  }
  .xaxis{transform: translate(20px,370px)}
  .left{transform: translate(20px 0) rotate(90deg)}
  $amt : 350px;
  $max: 40;
  $color: 300/$max;

  @for $i from 1 through $max {
    .bars:nth-child(#{$i}) rect {
      fill: hsl(($i - 10)*($color*1.25), ($i - 1)*$color, 40%);
    }
  }

</style>
