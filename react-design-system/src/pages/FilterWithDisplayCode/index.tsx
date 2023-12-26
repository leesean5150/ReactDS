import React from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import "./style.css";

hljs.registerLanguage("javascript", javascript);

const FilterWithDisplayCode = () => {
  return (
    <div>
      <div className="bodyContainer">
        <div className="codeBlock">
          <pre>
            <code className="codeBlock">
              {`
import * as React from "react";
import { useState, Fragment } from "react";

import { Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FilterWithDisplay = (props) => {
  const [filters, setFilters] = useState<string[]>([]);
  const onSelectFilter = (selected) => {
    props.handleSelect(selected);
    if (filters.includes(selected)) {
      setFilters((prev) => prev.filter((filter) => filter !== selected));
    } else {
      setFilters((prev) => [...prev, selected]);
    }
  };
  const handleRemoveFilter = (filterToRemove) => {
    props.handleRemove(filterToRemove);
    const indexToRemove = filters.indexOf(filterToRemove);
    const newFilters = filters
      .slice(0, indexToRemove)
      .concat(filters.slice(indexToRemove + 1));
    setFilters(newFilters);
  };

  return (
    <div className="bg-white mt-4">
      <section aria-labelledby="filter-heading">
        <div className="border-b border-gray-200 bg-white pb-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                {props.leftMost && (
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    {props.leftMostName}
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                )}
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {props.leftFilter.map((option, optionIndex) => (
                      <Menu.Item key={optionIndex}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm font-medium text-gray-900"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <div className="hidden sm:block">
              <div className="flow-root">
                <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
                  {props.rightFilters.map((section, sectionIdx) => (
                    <Popover
                      as="div"
                      key={section.name}
                      id={${`\`desktop-menu-${"${sectionIdx}"}\``}}
                      className="relative inline-block text-left"
                    >
                      <div>
                        <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          <span>{section.name}</span>
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                id={${`\`filter-${"${section.id}"}-${"${optionIdx}"}\``}}
                                name={${`\`${"${section.id}"}[]\``}}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  checked={
                                    !filters.includes(option.value)
                                      ? false
                                      : true
                                  }
                                  onChange={(e) => onSelectFilter(option.value)}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={${`\`filter-${"${section.id}"}-${"${optionIdx}"}\``}}
                                  className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 className="text-sm font-medium text-gray-500">
              Filters
              <span className="sr-only">, active</span>
            </h3>

            <div
              aria-hidden="true"
              className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
            />

            <div className="mt-2 sm:ml-4 sm:mt-0">
              <div className="-m-1 flex flex-wrap items-center">
                {filters.map((activeFilter) => (
                  <span
                    key={activeFilter}
                    className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-gray py-1.5 pl-3 pr-2 text-sm font-medium text-grey-900"
                  >
                    <span className="mb-1">{activeFilter}</span>
                    <button
                      type="button"
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                      onClick={(e) => handleRemoveFilter(activeFilter)}
                    >
                      <span className="sr-only">
                        Remove filter for {activeFilter}
                      </span>
                      <svg
                        className="h-2 w-2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M1 1l6 6m0-6L1 7"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { FilterWithDisplay };
`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export { FilterWithDisplayCode };
