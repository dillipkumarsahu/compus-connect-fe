import { Button, Card, Typography } from "antd";
import { primaryColor } from "../../app/config/theme";
import {
    CloudUploadOutlined
} from '@ant-design/icons';
const { Title } = Typography;

const CreatePostButtonCard = () => {

    return (
        <Card style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
            <center>
                <Title level={4} style={{ padding: 0, margin: 0 }}>Upload your post</Title>
                <Button type="primary" ghost size='large' style={{ width: '100%', marginTop: 20 }}>
                    <CloudUploadOutlined /> Upload
                </Button>
            </center>
        </Card>
    )
}
export default CreatePostButtonCard;