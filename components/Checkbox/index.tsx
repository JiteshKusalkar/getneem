import { CheckIcon } from '@heroicons/react/24/solid';
import { HTMLAttributes } from 'react';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Checkbox({ label, ...rest }: CheckboxProps) {
  return (
    <fieldset>
      <legend>Checkbox</legend>

      <div>
        <input type="checkbox" {...rest} />
        <div className="h-[18px] w-[18px] bg-[#70C4BB]">
          <CheckIcon />
        </div>
        {label && <label htmlFor={rest.id}>{label}</label>}
      </div>
    </fieldset>
  );
}

export default Checkbox;
