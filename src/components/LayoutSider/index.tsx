import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";

const { Sider } = Layout;

const MySider = () => {
  const navigate = useNavigate();
  return (
    <Sider className={styles.container}>
      <div className={styles.logo} />
      <Menu
        mode="inline"
        defaultSelectedKeys={["/solitairerulelist"]}
        onClick={({ key }) => navigate(key)}
      >
        <Menu.Item key="/solitairerulelist" icon={<UserOutlined />}>
          群接龙规则列表
        </Menu.Item>
        <Menu.Item key="/solitairelist" icon={<VideoCameraOutlined />}>
          群接龙列表
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MySider;
