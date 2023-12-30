import React, { useState } from "react";
import Main from "../components/Main";
import { Dropdown } from "primereact/dropdown";
import "primeicons/primeicons.css";
import { ChevronDownIcon } from "primereact/icons/chevrondown";
import { ChevronRightIcon } from "primereact/icons/chevronright";

export default function Country() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { name: "Australia", code: "AU" },
    { name: "Brazil", code: "BR" },
    { name: "China", code: "CN" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
    { name: "Spain", code: "ES" },
    { name: "United States", code: "US" },
  ];

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center ">
          <img
            alt={option.name}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`mr-2 flag flag-${option.code.toLowerCase()}`}
            style={{ width: "18px" }}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center mt-[10px]">
        <img
          alt={option.name}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ width: "18px" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  const panelFooterTemplate = () => {
    return (
      <div className="py-2 px-3 mt-[10px]">
        {selectedCountry ? (
          <span>
            <b>{selectedCountry.name}</b> selected.
          </span>
        ) : (
          "No country selected."
        )}
      </div>
    );
  };

  return (
    <div className="flex">
      <Main />

      <div className="flex flex-col ">
        <p className=" text-[#000] font-[25px] font-bold ml-[350px] mt-[130px]">
          Hello
        </p>

        <div className="card flex justify-content-center ml-[200px] mt-[50px] w-[80%]  border-2 rounded-[10px] px-[10px] py-[5px]">
          <Dropdown
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.value)}
            options={countries}
            optionLabel="name"
            placeholder="Select a Country"
            valueTemplate={selectedCountryTemplate}
            itemTemplate={countryOptionTemplate}
            className="w-full h-[100%] md:w-14rem"
            panelFooterTemplate={panelFooterTemplate}
            dropdownIcon={(opts) => {
              return opts.iconProps["data-pr-overlay-visible"] ? (
                <ChevronRightIcon {...opts.iconProps} />
              ) : (
                <ChevronDownIcon {...opts.iconProps} />
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
