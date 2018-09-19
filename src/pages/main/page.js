import { connect } from 'dva';
import styles from './page.less';
import Link from 'umi/link';
function App(props) {
    const exampleData = {
        list:props.pageData.list,
        handleClick:() => {
            props.dispatch({
                type: 'main/delete',
                payload: {
                },
            })
        }
    }
    return (
        <div className={styles.normal}>
            <br/>
            <Link to="/login">登录页</Link>
            <br/>
            <Link to="/list">购物车</Link>
          <br/>
          <Link to="/login">订单列表</Link>
          <br/>
          <Link to="/list">积分商城</Link>
        </div>
    );
}

export default connect(state => {
    return {
        pageData: state.main
    };
})(App);
