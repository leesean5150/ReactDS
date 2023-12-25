import * as React from "react";

const Table = (props) => {
  const firstHeader = props.header[0];
  const lastIndex = props.header.length;
  const remainingHeaders = props.header.slice(1, lastIndex);

  return (
    <div className="bg-white-900 h-screen">
      <div className="mx-auto">
        <div className="bg-white-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-black">
                  {props.name}
                </h1>
                <p className="mt-2 text-sm text-black-300">
                  {props.description}
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  onClick={() => {
                    props.handleAdd();
                  }}
                >
                  {props.topButton}
                </button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0"
                        >
                          {firstHeader}
                        </th>
                        {remainingHeaders.map((header) => (
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                            key={header}
                          >
                            {header}
                          </th>
                        ))}
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {props.tableData.map((row) => (
                        <tr key={row[props.rowAttributes[0]]}>
                          {props.rowAttributes.map((data) => (
                            <td
                              className={
                                data == props.rowAttributes[0]
                                  ? "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-0"
                                  : "whitespace-nowrap px-3 py-4 text-sm text-black-300"
                              }
                              key={row[data]}
                            >
                              {row[data]}
                            </td>
                          ))}
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <button
                              onClick={() => props.handleEdit()}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              {props.dataButton}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Table };
