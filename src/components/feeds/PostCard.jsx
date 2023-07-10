
import { Avatar, Card, Space, Tooltip, Typography, Dropdown, Image } from 'antd';
import {
    MoreOutlined,
    LikeOutlined, LikeFilled,
    CommentOutlined,
    ShareAltOutlined,
    BookOutlined, BookFilled,
    EditOutlined, DeleteOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import { primaryColor } from '../../app/config/theme';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Img from '../../json/error-load-img.json'
const { Title, Text } = Typography;

const items = [
    {
        key: '1',
        label: 'Edit',
        icon: <EditOutlined />
    },
    {
        key: '2',
        label: (
            <Text type='danger'>
                Delete
            </Text>
        ),
        icon: <DeleteOutlined />
    },
    {
        key: '3',
        label: (
            <Text type='danger'>
                Report
            </Text>
        ),
        icon: <InfoCircleOutlined />
    }
];

const PostCard = ({ like = false }) => {
    const [showCaption, setShowCaption] = useState(true);
    return (
        <Card
            style={{
                width: '100%',
                marginTop: 10,
            }}
            size='small'
            actions={[
                <Tooltip placement="bottom" title={'Like'}>
                    {
                        like ? <LikeFilled style={{ fontSize: 20, color: primaryColor }} /> : <LikeOutlined style={{ fontSize: 20 }} />
                    }
                </Tooltip>,
                <Tooltip placement="bottom" title={'Comment'}>
                    <CommentOutlined style={{ fontSize: 20 }} />
                </Tooltip>,
                <Tooltip placement="bottom" title={'Share'}>
                    <ShareAltOutlined style={{ fontSize: 20 }} />
                </Tooltip>,
                <Tooltip placement="bottom" title={'Save'}>
                    <BookOutlined style={{ fontSize: 20 }} />
                    {/* <BookFilled /> */}
                </Tooltip>
            ]}
        >
            {/* headers */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Space size={10}>
                    <Avatar size={43} style={{ fontSize: 23 }}>A</Avatar>
                    <div>
                        <Title level={5} style={{ fontSize: 15, padding: 0, margin: 0 }}>
                            <Link to='/' style={{ color: primaryColor }} >Dillip</Link>
                        </Title>
                        <Text type="secondary" style={{ fontSize: 10 }}>1d ago</Text>
                    </div>
                </Space>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomRight"
                >
                    <MoreOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
                </Dropdown>
            </div>
            {/* caption */}
            <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className={showCaption && 'caption'} style={{ width: showCaption && '86%' }}>
                    Ready to take your education to the next level?
                    Experience the convenience and flexibility of online
                    learning where knowledge has no boundaries Explore
                </p>
                {showCaption && <span style={{ color: primaryColor, cursor: 'pointer' }} onClick={() => setShowCaption(!showCaption)}>see more</span>}
            </div>
            {/* image */}
            <Image
                width={'100%'}
                src="./images/feed/demo_post.jpeg"
                fallback={Img.errImg}
            />
        </Card>
    )
}
export default PostCard;