"use client";
import React, { FC } from "react";

export interface IColumn {
  name: string;
  header?: string;
  width?: number;
  headerRender?: () => any;
  bodyRender?: (value: any) => any;
}

interface Props {
  data: any[];
  columns: IColumn[];
}

const Table: FC<Props> = ({ data, columns }) => {
  return (
    <div className="overflow-auto max-h-full">
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th
                  className="border sticky top-0 bg-white"
                  style={{ width: column.width }}
                  key={column.name}
                >
                  {column.headerRender ? column.headerRender() : column.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => {
                const value = item[column.name];
                return (
                  <td className="border" key={column.name}>
                    {column.bodyRender ? column.bodyRender(value) : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
