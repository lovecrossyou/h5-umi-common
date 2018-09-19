import { connect } from 'dva';
import styles from './page.less';
import Link from 'umi/link';
function App(props) {
    return (
        <div className={styles.normal}>
            <br/>
            <Link to="/login/page">登录页</Link>
            <br/>
            <Link to="/list/page">购物车</Link>
          <br/>
          <Link to="/login/page">订单列表</Link>
          <br/>
          <Link to="/points/page">积分商城</Link>
        </div>
    );
}

export default connect(state => {
    return {
        pageData: state.main
    };
})(App);
