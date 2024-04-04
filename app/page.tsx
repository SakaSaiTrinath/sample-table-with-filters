'use client';

import Table from './components/table';
import Search from './components/search'

export default function Home() {
  return (
    <div className='m-5 flex max-h-fit justify-between'>
      <div>
        <div>
          <label htmlFor="employee-filter" className='sr-only'>Employees</label>
          <h4 className='pb-2 font-semibold text-sm'>Employees</h4>
          <div className='flex'>
            <input 
              type="text" 
              className='text-sm border-gray-300 rounded-lg w-24 mr-2' 
              placeholder='Min' 
            />
            <input 
              type="text" 
              className='text-sm border-gray-300 rounded-lg w-24' 
              placeholder='Max' 
            />
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col flex-wrap items-end pb-4'>
          <Search />
        </div>
        <Table />
      </div>
    </div>
  );
}
