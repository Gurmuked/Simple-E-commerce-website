import React from 'react';

export const Input = ({ label, ...props }) => (
  <div className="mb-5">
    <label className="block text-sm font-semibold mb-1">{label}</label>
    <input className="w-[70%] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base" {...props} />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div className="mb-5">
    <label className="block text-sm font-semibold mb-1 ">{label}</label>
    <select className="w-[70%] border border-gray-300 rounded-md px-3 py-2 text-base" {...props}>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const Form = () => (
  <form className="w-[50%] ml-20">
    <h2 className="text-xl font-bold mb-6">Billing details</h2>
    <div className="flex gap-3 mb-5">
      <Input label="First Name" />
      <Input label="Last Name" />
    </div>
    <Input label="Company Name (Optional)" />
    <Select label="Country / Region" options={["Sri Lanka"]} />
    <Input label="Street address" />
    <Input label="Town / City" />
    <Select label="Province" options={["Western Province"]} />
    <Input label="ZIP code" />
    <Input label="Phone" />
    <Input label="Email address" type="email" />
    <Input label="Additional information" />
  </form>
);

export default Form;
