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
        defaultSelectedKeys={["/home"]}
        onClick={({ key }) => navigate(key)}
      >
        <Menu.Item key="/home" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="/about" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MySider;
