import React from 'react';
import { Datatable } from '../../../components/ui/datatable/Datatable';
import { Avatar, Badge, Button, Tag } from 'antd';
import { Edit, Trash } from 'iconoir-react';

const data = [
    {
        id: 1,
        EmpId: "12121",
        UserImg: "",
        FirstName: "Mohan Lal",
        LastName: "Suthar",
        UserName: "Mohan",
        Role: "POS Oprator",
        BranchName: "Main Branch",
        Department: "Reception",
        Shift: "Regular",
        ContactNo: "1234567890",
        EmailId: "Mohal@gmail.com",
        lastLogin: "2024-12-04 5:30 PM"
    },
    {
        id: 2,
        EmpId: "121123",
        UserImg: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        FirstName: "Mohan Lal",
        LastName: "Suthar",
        UserName: "Mohan",
        Role: "POS Oprator",
        BranchName: "Main Branch",
        Department: "Reception",
        Shift: "Regular",
        ContactNo: "1234567890",
        EmailId: "Mohal@gmail.com",
        lastLogin: "2024-12-04 5:30 PM"
    }
]

const columns: any = [
    {
        field: "Username",
        header: "Username",
    },
    {
        field: "EmpId",
        header: "Employee Id",
    },
    {
        field: "PersonName",
        header: "Person Name",
    },
    {
        field: "ContactDtl",
        header: "Contact Details",
    },
    {
        field: "Department",
        header: "Department",
    },
    {
        field: "Shift",
        header: "Shift",
    },
    {
        field: "lastLogin",
        header: "Last Login",
    },
    {
        field: "status",
        header: "Status",
    },
    {
        field: "",
        header: "",
    },
];

export const UserTbl = ({ setSelectedUser, selectedUser, setIsUserDtl }: any) => {

    return (
        <div>
            <Datatable
                data={data}
                columns={columns}
                selectData={selectedUser}
                setSelectData={setSelectedUser}
                checkbox
                rowClick={() => {
                    setIsUserDtl(true);
                }}
            >
                {(child: any) => {
                    return (
                        <>
                            {child.column.field === 'PersonName' && <>{child.row.FirstName} {child.row.LastName}</>}
                            {
                                child.column.field === 'Username' &&
                                <div className='flex items-center gap-3'>
                                    <Badge dot>
                                        {child.row.UserImg ?
                                            <Avatar shape="square" src={child.row.UserImg} />
                                            :
                                            <Avatar shape="square" className='bg-[--primary-50] text-[--primary]' >{child.row.UserName.charAt(0).toUpperCase()}</Avatar>
                                        }
                                    </Badge>
                                    <div>
                                        <div>{child.row.UserName}</div>
                                        <div className="text-xs text-slate-500">{child.row.Role}</div>
                                    </div>
                                </div>
                            }
                            {
                                child.column.field === 'ContactDtl' && <>
                                    <div>{child.row.ContactNo}</div>
                                    <div className="text-xs text-slate-500">{child.row.EmailId}</div>
                                </>
                            }
                            {
                                child.column.field === "status" && (
                                    <>
                                        <div>
                                            {child.row.status === "Y" ? (
                                                <Tag color="green">Active</Tag>
                                            ) : (
                                                <Tag color="red">Inactive</Tag>
                                            )}
                                        </div>
                                    </>
                                )
                            }

                            {
                                child.column.field === '' &&
                                <div className="flex items-center gap-3">
                                    <div className="group">
                                        <Button type="primary" shape="circle" icon={<Edit className='text-[11px]' />} />
                                    </div>
                                    <div className="group">
                                        <Button type="primary" shape="circle" danger icon={<Trash className='text-[11px]' />} />
                                    </div>
                                </div>
                            }

                            {
                                child.column.field !== "priority" &&
                                child.column.field !== "status" &&
                                child.column.field !== "id" &&
                                child.row[child.column.field]
                            }
                        </>
                    )
                }}
            </Datatable>
        </div >
    )
}
