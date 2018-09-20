import antdServer from 'antd-pro-server';
import mockjs from 'mockjs';
import user from './mock/user';
// // 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
//支持扩展
//支持从mock文件夹引入
//支持mockjs
const proxy = {
  'POST /api/shoppingcarts': {
    shops:[{
      shopName:'一直蟹',
      items:[{
        productName: '鳕鱼堡',
        price: 9.9,
        count:1
      },{
        productName: '鸡块煲',
        price: 88,
        count:2
      }]
    },{
      shopName:'丁宫保',
      items:[{
        productName: '宫保鸡丁',
        price: 19.9,
        count:10
      },{
        productName: '牛肉面',
        price: 12,
        count:3
      }]
    }]
  },
  'POST /api/addresslist':[
    {
      userName:'猪猪侠',
      phoneNum:'132220168837',
      address:'河南省汝州市庙下乡西荒村5组'
    },{
      userName:'王强',
      phoneNum:'18610824157',
      address:'北京市西城区百万庄大街11号粮科大厦三层'
    },
    {
      userName:'猪猪侠',
      phoneNum:'132220168837',
      address:'河南省汝州市庙下乡西荒村5组'
    },{
      userName:'王强',
      phoneNum:'18610824157',
      address:'北京市西城区百万庄大街11号粮科大厦三层'
    },
    {
      userName:'猪猪侠',
      phoneNum:'132220168837',
      address:'河南省汝州市庙下乡西荒村5组'
    },{
      userName:'王强',
      phoneNum:'18610824157',
      address:'北京市西城区百万庄大街11号粮科大厦三层'
    },
    {
      userName:'猪猪侠',
      phoneNum:'132220168837',
      address:'河南省汝州市庙下乡西荒村5组'
    },{
      userName:'王强',
      phoneNum:'18610824157',
      address:'北京市西城区百万庄大街11号粮科大厦三层'
    },
    {
      userName:'猪猪侠',
      phoneNum:'132220168837',
      address:'河南省汝州市庙下乡西荒村5组'
    },{
      userName:'王强',
      phoneNum:'18610824157',
      address:'北京市西城区百万庄大街11号粮科大厦三层'
    }
  ]
};
export default (noProxy ? {} : {...proxy,...antdServer,...user});
