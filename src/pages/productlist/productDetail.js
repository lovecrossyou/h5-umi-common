/**
 * Created by zhulizhe on 2018/9/27.
 */
import React from 'react';
import {connect} from 'dva';
import styles from './page.css'

const imgUrl = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3342077664,1536077955&fm=173&app=25&f=JPEG?w=640&h=353&s=6D444B8B000A39E71CB19EB103009087'



const Footer = ()=>{
  return <div className={styles.footer}>
    <div className={styles.footerL}>
      <div style={{padding:'6px'}}>
        <div className={styles.market}>单价：</div>
        <div className={styles.price}>10</div>
        <div className={styles.label}>积分</div>
      </div>
    </div>
    <div className={styles.footerR}>马上兑换</div>
  </div>
}

class ProductDetail extends React.Component {
  render() {
    return <div>
      <img src={imgUrl} alt="" style={{
        margin: 'auto',
        width: '100%',
        height: '275px',
        backgroundColor: '#e2e2e2',
      }}/>

      <div className={styles.pWrapper}>
        <div className={styles.pName}>玻璃水车用雨刮精浓缩装玻璃清洁清洗剂泡腾片</div>
        <div>
          <div className={styles.price}>10</div>
          <div className={styles.label}>积分</div>
          <div className={styles.market}>市场参考价：15元</div>
        </div>
      </div>

      <div className={styles.descWrapper}>商品描述</div>
      <div className={styles.brandWrapper}>
        <div className={styles.desc}>品名：玻璃水</div>
        <div className={styles.desc}>品牌：车仆</div>
      </div>

      <Footer/>
    </div>
  }
}

// products
export default connect(state => ({
  store: state.productlist
}))(ProductDetail);

