
import { Avatar, Card, Skeleton, Space, Tooltip, Typography } from 'antd';

const PostCardLoader = ({ like = false }) => {

    return (
        <Card
            style={{
                width: '100%',
                marginTop: 10,
                overflowX: 'hidden'
            }}
        >
            <Space size={10}>
                <Skeleton.Avatar active size='large' />
                <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 7 }}>
                    <Skeleton.Button active size='small' style={{ height: '15px', width: '140px' }} />
                    <Skeleton.Button active size='small' style={{ height: '13px', width: '10px' }} />
                </div>
            </Space>
            {/* caption */}
            <div style={{ margin: '15px 0', width: '100%' }}>
                <Skeleton.Button active size='small' style={{ height: '15px' }} className='w-100' />
            </div>
            {/* image */}
            <Skeleton.Image active style={{ height: '300px' }} className='w-100' />
        </Card>
    )
}
export default PostCardLoader;