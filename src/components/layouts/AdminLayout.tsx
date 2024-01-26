'use client'
import { Layout } from "antd";
import AdminNav from "../nav/AdminNav";

const { Content } = Layout;

function AdminLayout({children}: any) {
  return (
    <Layout>
      <AdminNav />
      <Layout className="container">
        <Content style={{ padding: "10px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
