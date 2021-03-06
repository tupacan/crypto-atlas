import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/logo-white.png";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 992) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size={{ xs: 25, sm: 28, md: 30, lg: 32, xl: 40, xxl: 50 }} />
                <Typography.Title level={2} className="logo">
                    <Link to="/" className="logo-link">
                        CryptoAtlas
                    </Link>
                </Typography.Title>
                <Button
                    className="menu-control-container"
                    onClick={() => setActiveMenu(!activeMenu)}
                >
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    );
};

export default Navbar;
