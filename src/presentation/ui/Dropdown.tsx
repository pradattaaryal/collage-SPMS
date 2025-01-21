import { FaCaretDown } from 'react-icons/fa';
type DropdownProps = {
  name: string;
  title?: string;
  defaultOption?: string;
  options: string[];
  handleChange: (option: string) => void; // This must be included
};

const Dropdown = ({
  name,
  title,
  defaultOption,
  options,
  handleChange,
}: DropdownProps) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(e.target.value); // Call the function with the selected value
  };

  return (
    <div>
      {title && <h2 className="mb-1">{title}</h2>}
      <select
        name={name }
        className="px-2 outline-none min-w-[100px] text-black  bg-hover  max-h-[60px] h-full  py-2 rounded-lg focus:outline-secondaryBG"
        onChange={handleSelectChange}
        defaultValue=""
        style={{
 
          paddingRight: "10px" /* Optional: Adjust padding if necessary */,
        }}
      >
        {defaultOption && (
          <option value="" className='bg-white'  >
            {defaultOption}
          </option>
        )}
        {options.map((item) => (
          <option className='bg-white'  key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
       
    </div>
  );
};

export default Dropdown;
