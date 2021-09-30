import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoAPI";

import genericImage from "../images/crypto-generic-image.jpg";
import Loader from "./Loader";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory,
        count: simplified ? 6 : 50,
    });

    const { data } = useGetCryptosQuery(100);

    if (!cryptoNews?.value) return <Loader />;

    return (
        <Row gutter={[20, 20]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((coin) => (
                            <Option value={coin.name}>{coin.name}</Option>
                        ))}
                    </Select>
                </Col>
            )}

            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <a
                        href={news.url}
                        style={{ display: "block" }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Card hoverable className="news-card">
                            <div className="news-image-container">
                                <Title level={4} className="muted">
                                    {news.name}
                                </Title>
                                <img
                                    style={{
                                        maxHeight: "100px",
                                        maxWidth: "150px",
                                        marginLeft: "10px",
                                    }}
                                    src={news?.image?.thumbnail?.contentUrl || genericImage}
                                    alt="Article Cover"
                                />
                            </div>
                            <p>
                                {news.description.length > 180
                                    ? `${news.description.substring(0, 180)}...`
                                    : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} />
                                    <Text className="provider-name">
                                        {news.provider[0]?.name || "Unknown"}
                                    </Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
                            </div>
                        </Card>
                    </a>
                </Col>
            ))}
        </Row>
    );
};

export default News;
