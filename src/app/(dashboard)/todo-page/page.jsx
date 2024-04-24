import React from 'react'
import Image from 'next/image'

const TodoPage = () => {
    return (
        <div>
            <div className='bg-yellow-300 h-42 p-3 m-5 rounded-xl flex'>
                <div className='w-32 h-32 bg-white rounded-xl '>
                    <div className='text-center'>
                        <p className='text-3xl font-bold text-red-600 pt-4'>Wed</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-5xl font-semibold'>17</p>
                    </div>
                </div>
                <div className='h-32 ml-8'>
                    <p className='text-xl font-bold mt-6 mb-2'>Web Mini Project</p>
                    <p>This is The Last Mini Project For This Generation</p>
                </div>
                <button className='w-28 h-8 rounded-md bg-white mt-24 ml-36'>
                    Todo
                </button>
            </div>

        </div>
    )
}

export default TodoPage