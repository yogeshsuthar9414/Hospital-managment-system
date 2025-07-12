// import { Card, Skeleton } from 'antd'
import React from 'react'

export const CardSkl = () => {
    return (
        <React.Fragment>
            <div className='grid gap-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-3 '>
                {/* <Card className='reletive'>
                    <div className='skeletop-w-100'>
                        <Skeleton.Image active={true} style={{ width: "100%", height: 200 }} />
                    </div>
                    <div className='bg-[--light-20] my-3 p-2 rounded-md'>
                        <Skeleton.Input active={true} size={"small"} block={true} />
                        <div className='text-sm flex items-center gap-2 mt-2'><Skeleton.Input active={true} size={"small"} className='w-[100px]' /> / <Skeleton.Input active={true} size={"small"} className='w-[100px]' /></div>
                        <div className='text-sm mt-2'><Skeleton.Input active={true} size={"small"} /></div>
                    </div>
                    <div className='flex items-center'>
                        <div><Skeleton.Input active={true} size={"small"} /></div>
                        <Skeleton.Button active={true} className='ms-auto' size={"small"} shape={"square"} />
                    </div>

                    <span className={`absolute px-2 py-1 top-[15px] left-[15px]`}>
                        <Skeleton.Button active={true} size={"small"} shape={"round"} />
                    </span> 
                </Card> */}
            </div>
        </React.Fragment>
    )
}
