import { Tag } from 'antd'
import React from 'react'

interface statusProps {
    status: string
}

const Status: React.FC<statusProps> = ({ status }) => {
    return (
        <>
            {status === "IN" && <Tag color="processing">In-Process</Tag>}

            {status === "P" && <Tag color="default">Pending</Tag>}

            {status === "L" && <Tag color="danger">High</Tag>}
        </>
    )
}

export default Status