/* eslint-disable no-unused-vars */
import { Space, Typography } from "antd";
import UserListItem from "./UserListItem";
const { Title } = Typography;


const UserList = () => {
    return (
        <div style={{ width: '100%', padding: '0 15px' }}>
            <Title level={5} style={{ textAlign: 'center' }}>List of your collegemates</Title>
            <Space size={7} direction='vertical' style={{ width: '100%', marginTop: 10 }}>
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
            </Space>
        </div>
    )
}
export default UserList;