import styles from "./index.less";
import { connect } from "dva";
import { NavBar, Icon } from "antd-mobile";
import router from "umi/router";
import withRouter from "umi/withRouter";
import config from "../utils/config";
const { prefix, openPages } = config;
import { TransitionGroup, CSSTransition } from "react-transition-group";


const Layout = props => {
  if (openPages && openPages.includes(props.pathname)) {
    return <div> {props.children}</div>;
  }
  return (
    <div>
      <NavBar
        mode="dark"
        className={styles.barColor}
        style={{ backgroundColor: "#f59417",height:'50px' }}
        icon={
          (props.pathname === "/main" || props.pathname === "/") ?null: (
            <Icon type="left" size={'small'}/>
          )
        }
        onLeftClick={() => {
          //这里需要做指定式跳转，手机页面会涉及到用户刷新的问题
          router.go(-1);
        }}
      >
        {props.text}
      </NavBar>
      {props.children}
    </div>
  );
};


function mapStateToProps(state) {
  return {
    text: state.global.text,
    pathname: state.routing.location.pathname
  };
}

// const Animate = withRouter(
//   ({ location }) =>
//     <TransitionGroup>
//       <CSSTransition key={location.key} classNames="fade" timeout={300}>
//         { Layout }
//       </CSSTransition>
//     </TransitionGroup>
// )


export default withRouter(connect(mapStateToProps)(Layout));
