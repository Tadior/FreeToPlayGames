import { ArrowLeftOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import {useNavigate} from "react-router-dom";
import cls from './GoBackButton.module.css'
export const GoBackButton = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    return(
        <>
            <FloatButton
                shape="circle"
                type="primary"
                className={cls.GoBackButton}
                icon={<ArrowLeftOutlined />}
                onClick={handleClick}
            />
        </>
    )
}
