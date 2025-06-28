import { Button } from 'antd'
import { Plus } from 'iconoir-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate();
    return (
        <div>

            <Button type="primary" icon={<Plus />} onClick={() => navigate("/dashboard")}>
                Add New
            </Button>
        </div>
    )
}
