import React from 'react'

interface MaintenanceListProps {
    isShowDtl: boolean;
    setIsShowDtl: React.Dispatch<React.SetStateAction<boolean>>;
    selectedMaintenance: any;
    setSelectedMaintenance: React.Dispatch<React.SetStateAction<any>>
}

const MaintenanceList: React.FC<MaintenanceListProps> = ({ isShowDtl, setIsShowDtl, selectedMaintenance, setSelectedMaintenance }) => {

    const Users = [
        {
            id: 1,
            mainCategory: 'Preventive Maintanance',
            mainDescription: "Routine Check",
            TechnicianNm: "John Doe",
            Status: "Y",
            Cost: "1027",
            Date: "2024-12-20",
        },
        {
            id: 2,
            mainCategory: 'Corrective',
            mainDescription: "Gear Replacement",
            TechnicianNm: "Jane Smith",
            Status: "Y",
            Cost: "1027",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
        {
            id: 3,
            mainCategory: 'Emergency',
            mainDescription: "Power Failure",
            TechnicianNm: "Mike Lee",
            Status: "P",
            Cost: "",
            Date: "2024-12-20",
        },
    ]

    return (
        <div>
            {Users.map((items: any, id: number) => (
                <div key={id} className='p-2 border mb-3 rounded'>
                    <div className={`text-base text-[--dark] font-semibold ${selectedMaintenance === items.id ? "text-[--primary]" : ""} hover:text-[--primary] cursor-pointer hover:underline`} onClick={() => { setIsShowDtl(true); setSelectedMaintenance(items.id) }}>{items.mainCategory}</div>
                    <div className='text-xs text-[--light]'>{items.mainDescription}</div>
                    <div className='text-xs text-[--light]'>Assigned {items.TechnicianNm}</div>
                    <div className='text-xs text-[--light]'>Main. On {items.Date}</div>
                    <div className='flex items-center'>
                        <div className='text-xs text-[--dark] font-semibold'>{items.Cost !== "" ? <>&#8377; {parseFloat(items.Cost).toFixed(2)}</> : ""}</div>
                        <div className={`${items.Status === "Y" && "bg-[--success]"} text-xs px-2 py-1  text-white rounded-full ms-auto`}>{(items.Status === "Y" && "Complate")}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MaintenanceList