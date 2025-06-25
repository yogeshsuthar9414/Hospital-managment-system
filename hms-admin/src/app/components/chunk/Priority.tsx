import { Tag } from 'antd'
import React from 'react'

interface prorityProps {
    flag: string
}

const Priority: React.FC<prorityProps> = ({ flag }) => {
    return (
        <>
            {flag === "L" && <Tag color="green">Low</Tag>}
            {flag === "M" && <Tag color="gold">Medium</Tag>}
            {flag === "H" && <Tag color="red">High</Tag>}
        </>
    )
}

export default Priority