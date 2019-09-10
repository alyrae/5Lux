import { ITabbar } from '../interfaces/interfaces'
export let tabbar: ITabbar[] = [{
  title: '首页',
  path: '/',
  iconfont: '\ue603',
  // 直接在span标签中写unicode编码后的汉字<span>&#xe603</span>
  // 使用双大括号的模板语法要用\u编码格式<span>{{iconfont}}</span>
  id: 1
}, {
  title: '商城',
  path: '/mall',
  iconfont: '\ue633',
  id: 2
}, {
  title: '海外购物',
  path: '/overseaservice',
  iconfont: '\ue731',
  id: 3
}, {
  title: '到店',
  path: '/store',
  iconfont: '\ue608',
  id: 4
}, {
  title: '个人',
  iconfont: '\ue624',
  path: '/my',
  id: 5
}]
