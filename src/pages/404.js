import React from 'react'
import styles from './404.less'
import { connect } from 'dva';
import devIcon from '../assets/dev-page.png'

export default connect()(({ dispatch }) => {
  return (
  <div className={styles.error}>
    <img alt='' src={devIcon} style={{width:'200px',height:'106px'}}/>
    <h4 style={{marginTop:'20px',color:'#999999'}}>程序猿加紧开发中...</h4>
  </div>
  );
});

