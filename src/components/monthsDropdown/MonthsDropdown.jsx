import { useState } from "react";
import Select from "react-select";
// import { ChevronDown } from "../svg";

const MonthsDropdown = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const customStyles = {
    input: (provided) => {
      return { ...provided, padding: 0, margin: 0 };
    },
  };

  return (
    <Select
      options={months}
      value={selectedMonth}
      onChange={setSelectedMonth}
      placeholder="Select a month"
      width={"137px"}
      styles={customStyles}
      // components={{
      //   IndicatorsContainer: () => null,
      //   DropdownIndicator: () => <ChevronDown />,
      // }}
    />
  );
};

export default MonthsDropdown;
