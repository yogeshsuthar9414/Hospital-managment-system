import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'antd/es/avatar/avatar';
import { Button } from 'antd';
import { MoreVert } from 'iconoir-react';

const assignedWorkOrders = [
    {
        id: 1,
        name: 'Work Order 1',
        workOrderId: "WO-12s",
        assignedBy: "ROhoan"
    },
    {
        id: 2,
        name: 'Work Order 2',
        workOrderId: "WO-12s",
        assignedBy: "ROhoan"
    },
    {
        id: 3,
        name: 'Work Order 3',
        workOrderId: "WO-12s",
        assignedBy: "ROhoan"
    },
]

interface workOrderListProps {
    asignOrder?: boolean
}

const WorkOrderList: React.FC<workOrderListProps> = ({ asignOrder }) => {
    return (
        <div>
            {assignedWorkOrders.map((items: any) => (
                <Link to="" key={items} className='p-2 border mb-3 flex items-start gap-3 cursor-pointer'>
                    <Avatar shape="square" size={40} className='bg-[--primary-50] text-[--primary]' >{items.name.charAt(0).toUpperCase()}</Avatar>
                    <div>
                        <div className='text-base text-[--dark] font-semibold hover:text-[--primary] hover:underline'>{items.name}</div>
                        <div className='text-xs text-[--light]'>{items.workOrderId} / {items.assignedBy}</div>
                    </div>
                    {asignOrder &&
                        <Button className='ms-auto btn-sm' icon={<MoreVert stroke='3' />} />
                    }
                </Link>
            ))}
        </div>
    )
}

export default WorkOrderList;