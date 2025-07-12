import React from 'react';
import { Link } from 'react-router-dom';
// import Avatar from 'antd/es/avatar/avatar';
// import { Tooltip } from 'antd';

const Users = [
    {
        id: 1,
        userNm: 'Rohan',
        userType: "Technician",
        TechnicianType: "Electrical",
        LastAssignWO: "WO-!@#123",
        AssginOn: "1 Hour ago",
        UserStatus: "H",
    },
]

const UserList = () => {
    return (
        <div>
            {Users.map((items: any) => (
                <Link to="" key={items} className='p-2 border mb-3 flex items-start gap-3 cursor-pointer'>
                    {/* <Avatar shape="square" size={30} className='bg-[--primary-50] text-[--primary]' >{items.userNm.charAt(0).toUpperCase()}</Avatar> */}
                    <div>
                        <div className='text-base text-[--dark] font-semibold hover:text-[--primary] hover:underline'>{items.userNm}</div>
                        <div className='text-xs text-[--light]'>{items.userType} / {items.TechnicianType}</div>
                        <div className='text-xs text-[--light]'>Assigned {items.LastAssignWO}</div>
                        <div className='text-xs text-[--light]'>Assigned On {items.AssginOn}</div>
                    </div>
                    {/* {items.UserStatus === "H" &&
                        <Tooltip title="Heavy Workload">
                            <Avatar shape="square" size={20} className='bg-[--danger-50] text-[--danger] ms-auto' >{items.UserStatus}</Avatar>
                        </Tooltip>
                    }
                    {items.UserStatus === "B" &&
                        <Tooltip title="Busy">
                            <Avatar shape="square" size={20} className='bg-[--warning-50] text-[--warning] ms-auto' >{items.UserStatus}</Avatar>
                        </Tooltip>
                    }
                    {items.UserStatus === "Y" &&
                        <Tooltip title="Active">
                            <Avatar shape="square" size={20} className='bg-[--success-50] text-[--success] ms-auto' >{items.UserStatus}</Avatar>
                        </Tooltip>
                    }
                    {items.UserStatus === "N" &&
                        <Tooltip title="Unavailable">
                            <Avatar shape="square" size={20} className='bg-[--secondary-50] text-[--secondary] ms-auto' >{items.UserStatus}</Avatar>
                        </Tooltip>
                    } */}
                </Link>
            ))}
        </div>
    )
}

export default UserList;