import React from "react";
import { Link } from "react-router-dom";
import { Typography, Space } from "antd";

const Footer = () => {
    return (
        <footer className="footer">
            <Typography.Title level={4} style={{ color: "white", textAlign: "center" }}>
                CryptoAtlas
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </Space>
            <Typography.Link
                href="https://www.vecteezy.com/free-vector/crypto-logo"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 10 }}
            >
                Crypto Logo Vectors by Vecteezy
            </Typography.Link>
        </footer>
    );
};

export default Footer;
