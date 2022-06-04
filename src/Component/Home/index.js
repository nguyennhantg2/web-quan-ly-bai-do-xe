import React from "react";
import {
  BrowserRouter as Router, Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  CarOutlined,
  SettingOutlined,
  VideoCameraAddOutlined
} from '@ant-design/icons'
import "../../main.css"
import Categories from "../Category";
import Products from "../Products";
import QuanLyCamera from "../Camera";
import QuanLyBaiDo from "../Baido";

export default function CustomLinkExample() {
  return (
    <Router>
      <section className="ant-layout ant-layout-has-sider">
        <div className="ant-tabs ant-tabs-left">
          <div className="ant-tabs-nav">
            <div className="ant-tabs-nav-wrap">
              <div className="ant-tabs-nav-list">
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 36, marginBottom: 15 }}>
                  <div style={{textTransform: 'uppercase'}}>QUẢN TRỊ</div>
                </div>
                <div className="ant-tabs-tab">
                  <a href="/">
                    <div className="d-flex flex-middle">
                      <HomeOutlined /> Trang chủ
                    </div>
                  </a>
                </div>
                <OldSchoolMenuLink
                  to="/admin/vexe"
                  label={
                    <div className='d-flex flex-middle'>
                      <VideoCameraAddOutlined /> Quản lý camera
                    </div>
                  }
                />
                <OldSchoolMenuLink
                  to="/admin/categories"
                  label={
                    <div className='d-flex'>
                      <CarOutlined />
                      Quản lý bãi đỗ
                    </div>
                  }
                />
                <OldSchoolMenuLink
                  activeOnlyWhenExact={true}
                  to="/admin/product"
                  label={
                    <div className='d-flex flex-middle'>
                      <UsergroupAddOutlined />
                      Quản lý người dùng
                    </div>
                  }
                />
                <OldSchoolMenuLink
                  to="/admin/soluongxe"
                  label={
                    <div className='d-flex flex-middle'>
                      <SettingOutlined /> Quản lý chung
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/admin/vexe">
            <QuanLyCamera />
          </Route>
          <Route path="/admin/categories">
            <QuanLyBaiDo />
          </Route>
          <Route path="/admin/product">
            <Products />
          </Route>
          <Route path="/admin/soluongxe">
            <Products />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "ant-tabs-tab ant-tabs-tab-active" : "ant-tabs-tab"}>
      {match && " "}
      <Link to={to}>{label}</Link>
    </div>
  );
}