import { Avatar, Button, Card, Typography } from "antd";
import { primaryColor } from "../../app/config/theme";
import {
    LogoutOutlined,
    EditFilled
} from '@ant-design/icons';


const { Title, Text } = Typography;
const UserProfileCard = () => {

    return (
        <Card style={{ display: 'flex', flexDirection: 'column' }}>
            <center>
                <Avatar
                    src="https://xsgames.co/randomusers/avatar.phpl?g=pixel&key=100"
                    size={70} style={{ fontSize: 40, marginBottom: 10 }}
                >
                    D
                </Avatar>
                <Title level={4} style={{ padding: 0, margin: 0 }}>Dillip Kumar Sahu</Title>
                <Text>dillipkumar@gmail.com</Text>

                <Title level={5} style={{ color: primaryColor, letterSpacing: 2 }}>
                    Government College Of Engineering, Keonjhar
                </Title>

                <Button type='primary' size='large' style={{ width: '100%', marginTop: 20 }}>
                    <EditFilled /> Update Profile
                </Button>
                <Button type='link' danger style={{ width: '100%', marginTop: 15 }}>
                    <LogoutOutlined />Logout
                </Button>
            </center>
        </Card>
    )
}
export default UserProfileCard;