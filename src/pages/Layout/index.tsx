import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import LayoutSider from "components/LayoutSider";
import LayoutHeader from "components/LayoutHeader";

const { Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <LayoutSider />
      <Layout style={{ marginLeft: 200 }}>
        <LayoutHeader />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            backgroundColor: "white",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
