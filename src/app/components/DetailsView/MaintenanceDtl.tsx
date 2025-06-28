import { Avatar, Collapse, Tabs } from 'antd'
import { ArrowLeft, Clock, User } from 'iconoir-react'
import React from 'react'
import WorkOrderList from '../listView/WorkOrderList';
import MachineImg from "../../assets/images/images.jpg";

interface MaintenanceDtlProps {
    isShowDtl: boolean;
    setIsShowDtl: React.Dispatch<React.SetStateAction<boolean>>;
    selectedMaintenance: any;
    setSelectedMaintenance: React.Dispatch<React.SetStateAction<any>>;
    flag?: string
}

const MaintenanceDtl: React.FC<MaintenanceDtlProps> = ({ isShowDtl, setIsShowDtl, selectedMaintenance, setSelectedMaintenance, flag }) => (
    <div>
        {flag !== "M" &&
            <div className='flex items-center w-full border-b-2 p-3'>
                <ArrowLeft className='text-xs me-2 cursor-pointer hover:text-primary' onClick={() => { setIsShowDtl(false); setSelectedMaintenance(null); }} />
                <div className={'text-sm text-[--dark] font-semibold '}>Maintenance Details</div>
            </div>
        }
        <div>
            <div className='p-3 px-5'>
                <div className='flex items-center gap-3 border rounded p-3'>
                    <div>
                        <div className='text-lg text-[--dark] font-bold'>Routine Check</div>
                        <div className='text-sm text-[--light]'>Preventive</div>
                    </div>
                    <div className={`px-2 py-1 bg-[--success] text-sm text-white rounded-full ms-auto`}>
                        Complate
                    </div>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 mt-6 gap-2'>
                    <div className='md:flex items-center justify-center'>
                        <div className='flex items-center gap-3'>
                            <Avatar shape="square" size={30} icon={<Clock className='text-sm' />} />
                            <div>
                                <div className='text-xs text-[--light]'>Maintenance On</div>
                                <div className='text-sm text-[--dark]'>10-12-2024 10:00 PM</div>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex items-center justify-center'>
                        <div className='flex items-center gap-3'>
                            <Avatar shape="square" size={30} icon={<User className='text-sm' />} />
                            <div>
                                <div className='text-xs text-[--light]'>Work Order</div>
                                <div className='text-sm text-[--dark]'>3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Tabs
                defaultActiveKey="1"
                items={[
                    {
                        label: 'Basic Info.',
                        key: '1',
                        children: <>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                <div>
                                    <div className='text-xs text-[--light]'>Machine Status</div>
                                    <div className='text-[--dark] font-semibold'>Excellent</div>
                                </div>
                                <div></div>
                                <div>
                                    <div className='text-xs text-[--light]'>Start Time</div>
                                    <div className='text-[--dark] font-semibold'>28-12-2024 10:00:00</div>
                                </div>
                                <div>
                                    <div className='text-xs text-[--light]'>End Time</div>
                                    <div className='text-[--dark] font-semibold'>02-01-2025 18:00:00</div>
                                </div>
                                <div>
                                    <div className='text-xs text-[--light]'>Total Time</div>
                                    <div className='text-[--dark] font-semibold'>6 Days 8 Hours</div>
                                </div>
                                <div></div>
                                <div>
                                    <div className='text-xs text-[--light]'>Remarks</div>
                                    <div className='text-[--dark] font-semibold'>Machine condition is good</div>
                                </div>
                            </div>
                        </>,
                    },
                    {
                        label: 'Task',
                        key: '2',
                        children: <div className={`${flag !== "M" ? "h-[calc(100vh_-_357px)]" : "h-[calc(100vh_-_314px)]"} overflow-auto`}>
                            {Array(5).fill(0).map((items, id: number) => (
                                <Collapse
                                    key={id}
                                    size="small"
                                    className='mb-3'
                                    items={[{
                                        key: '1',
                                        label: <div className='flex items-center'>
                                            <div>Task {id + 1}</div>
                                            <div className={`px-2 py-1 bg-[--success] text-xs text-white rounded-full ms-auto`}>
                                                Complate
                                            </div>
                                        </div>,
                                        children: <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                            <div className='col-span-2'>
                                                <div className='text-xs text-[--light]'>Description</div>
                                                <div className='text-[--dark] font-semibold'>HVAC Filter Replacement</div>
                                            </div>
                                            <div>
                                                <div className='text-xs text-[--light]'>Technician</div>
                                                <div className='text-[--dark] font-semibold'>John Doe</div>
                                            </div>
                                            <div>
                                                <div className='text-xs text-[--light]'>Start Time</div>
                                                <div className='text-[--dark] font-semibold'>28-12-2024 10:00:00</div>
                                            </div>
                                            <div>
                                                <div className='text-xs text-[--light]'>End Time</div>
                                                <div className='text-[--dark] font-semibold'>02-01-2025 18:00:00</div>
                                            </div>
                                            <div>
                                                <div className='text-xs text-[--light]'>Total Time</div>
                                                <div className='text-[--dark] font-semibold'>6 Days 8 Hours</div>
                                            </div>
                                            <div>
                                                <div className='text-xs text-[--light]'>Remarks</div>
                                                <div className='text-[--dark] font-semibold'>Machine condition is good</div>
                                            </div>
                                        </div>
                                    }]} />
                            ))}

                        </div>,
                    },
                    {
                        label: 'Work Order',
                        key: '3',
                        children: <div className={`${flag !== "M" ? "h-[calc(100vh_-_357px)]" : "h-[calc(100vh_-_314px)]"} overflow-auto`}><WorkOrderList /></div>,
                    },
                    {
                        label: 'Cost',
                        key: '4',
                        children: <div className={`${flag !== "M" ? "h-[calc(100vh_-_357px)]" : "h-[calc(100vh_-_314px)]"} overflow-auto`}>
                            <table className="min-w-full divide-y divide-slate-100 table-fixed ">
                                <thead className=" border-t border-slate-100">
                                    <tr className="bg-zinc-100 rounded-md">
                                        <th className="p-3 text-sm text-left">
                                            Categoty
                                        </th>
                                        <th className="p-3 text-sm text-left">
                                            Cost
                                        </th>
                                        <th className="p-3 text-sm text-right">
                                            Total Cost
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-3 text-sm text-[var(--dark)]">
                                            Labor
                                        </td>
                                        <td className="p-3 text-sm text-[var(--dark)]">
                                            5 Hours * 200/Hours
                                        </td>
                                        <td className="p-3 text-sm text-[var(--dark)] text-right">
                                            1,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-sm text-[var(--dark)]">
                                            Air Filter
                                        </td>
                                        <td className="p-3 text-sm text-[var(--dark)]">
                                            1 pc * 1000/pc
                                        </td>
                                        <td className="p-3 text-sm text-[var(--dark)] text-right">
                                            1,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-sm text-[var(--dark)]">
                                            Emergency Fee
                                        </td>
                                        <td className="p-3 text-sm text-[var(--dark)]">
                                            -
                                        </td>
                                        <td className="p-3 text-sm text-[var(--dark)] text-right">
                                            200
                                        </td>
                                    </tr>
                                    <tr className='bg-[--primary-20]'>
                                        <td colSpan={2} className="p-3 text-sm text-[var(--dark)] font-semibold">
                                            Total Cost
                                        </td>
                                        <td className="p-3 text-sm text-[var(--dark)] text-right font-semibold">
                                            2,200
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>,
                    },
                    {
                        label: 'Inspection Images',
                        key: '5',
                        children: <div className={`grid md:grid-cols-2 grid-cols-1 gap-4 ${flag !== "M" ? "h-[calc(100vh_-_357px)]" : "h-[calc(100vh_-_314px)]"} overflow-auto`}>
                            <img src={MachineImg} alt='machine' className='w-full h-[200px] rounded-md' />
                            <img src={MachineImg} alt='machine' className='w-full h-[200px] rounded-md' />
                            <img src={MachineImg} alt='machine' className='w-full h-[200px] rounded-md' />
                            <img src={MachineImg} alt='machine' className='w-full h-[200px] rounded-md' />
                            <img src={MachineImg} alt='machine' className='w-full h-[200px] rounded-md' />
                            <img src={MachineImg} alt='machine' className='w-full h-[200px] rounded-md' />
                            <img src={MachineImg} alt='machine' className='w-full h-[200px] rounded-md' />
                        </div>,
                    },
                ]} />


        </div>
    </div>
)

export default MaintenanceDtl