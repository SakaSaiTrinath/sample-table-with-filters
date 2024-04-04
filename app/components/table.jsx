
"use client";

import { Table } from "flowbite-react";
import suppliersData from '../data.json';

function Component() {
  return (
    <div className="overflow-x-auto overflow-y-scroll max-h-96 border border-slate-200 rounded-md">
      <Table striped>
        <Table.Head className="sticky top-0 border-b">
          <Table.HeadCell>Company</Table.HeadCell>
          <Table.HeadCell>Industry</Table.HeadCell>
          <Table.HeadCell className="text-left">Location</Table.HeadCell>
          <Table.HeadCell className="text-right">Employees</Table.HeadCell>
          <Table.HeadCell className="text-right">Established</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {suppliersData.map((supplierData) => (
            <Table.Row
              key={supplierData.supplier_id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800 pt-1 pb-1"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {supplierData.supplier_name}
              </Table.Cell>
              <Table.Cell>{supplierData.product_category}</Table.Cell>
              <Table.Cell className="text-left">{supplierData.city}</Table.Cell>
              <Table.Cell className="text-right">{supplierData.employees}</Table.Cell>
              <Table.Cell className="text-right">{supplierData.year_founded}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Component;
