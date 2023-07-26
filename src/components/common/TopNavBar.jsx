/* eslint-disable jsx-a11y/anchor-is-valid */
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Grid, Input, Space, message } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unAuthenticateReduxService } from "../../app/redux/slices/authReducer";
import { primaryColor } from "../../app/config/theme";
import SchoolIcon from '@mui/icons-material/School';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const { useBreakpoint } = Grid;

const itemsMob = [
    {
        key: '1',
        label: (
            <Link to='/profile'>
                Profile
            </Link>
        ),
        icon: <UserOutlined />,
    },
    {
        type: 'divider',
    },
    {
        key: '2',
        label: 'Logout',
        icon: <LogoutOutlined style={{ color: 'red' }} />,
    },
];

const itemsDesk = [
    {
        key: '1',
        label: 'Logout',
        icon: <LogoutOutlined style={{ color: 'red' }} />,
    },
];

const TopNavBar = () => {
    const dispatch = useDispatch();
    const screens = useBreakpoint();
    const [messageApi, contextHolder] = message.useMessage();

    const onClick = ({ key }) => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loging out...',
        });

        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Logout successfull',
                duration: 2,
            });
        }, 1000);

        setTimeout(() => {
            dispatch(unAuthenticateReduxService());
        }, 2000);
    };

    const onSearch = (e) => {
        console.log(e);
    }

    return (
        <div style={{
            padding: screens.lg ? '20px 50px' : screens.md ? '20px 0px' : '',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            {contextHolder}
            <Link to={'/'}
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <img src="./images/short-logo.svg" alt="logo" width={60} />
            </Link>
            {
                screens.md
                &&
                <Input
                    placeholder="Search colleges"
                    style={{ width: screens.xl ? 500 : 400 }} size='large'
                    allowClear
                    enterButton
                    onSearch={onSearch}
                />
            }

            <Space size={screens.md ? 20 : 10} style={{ color: '#000' }}>
                {
                    !screens.md &&
                    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                        <Button type='ghost' shape="circle" icon={<SearchIcon />} size='middle' />
                    </Link>
                }
                <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                    <Button type='ghost' shape="circle" icon={<SchoolIcon />} size='middle' />
                </Link>
                <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                    <Button type='ghost' shape="circle" icon={<NotificationsIcon />} size='middle' />
                </Link>
                <Dropdown menu={{ items: screens.md ? itemsDesk : itemsMob, onClick }} placement="bottomRight" arrow>
                    <Avatar style={{ backgroundColor: primaryColor, cursor: 'pointer' }} icon={<UserOutlined />} size={'default'} />
                </Dropdown>
            </Space>
        </div >
    )
}
export default TopNavBar;