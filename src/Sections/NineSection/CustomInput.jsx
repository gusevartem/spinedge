// CustomInput.jsx
import React, { forwardRef } from 'react';

const CustomInput = forwardRef(({
  id,
  placeholder = "",
  isBig = false,
  customStyle = "",
  name,
  value,
  onChange,
  ...rest
}, ref) => {
  return (
    <div
      id={id}
      className={`${isBig ? 'h-[220px]' : ''} w-[730px] bg-white/5 rounded-md overflow-hidden z-50 relative ${customStyle}`}
    >
      {isBig ? (
        <textarea
          name={name}
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
          className="w-full h-[200px] mono text-[13px] md:text-base bg-transparent px-4 text-white placeholder-white/50 focus:outline-none resize-none"
        />
      ) : (
        <input
          name={name}
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          {...rest}
          className='w-full md:h-[60px] h-[50px] mono text-[13px] md:text-base bg-transparent px-4 text-white placeholder-white/50 focus:outline-none transition-all'
        />
      )}

      <img src='/Four/miniLeft.webp' className='absolute bottom-0 left-0' alt="" />
      <img src='/Four/miniRight.webp' className='absolute top-0 right-0' alt="" />
    </div>
  );
});

CustomInput.displayName = 'CustomInput';
export default CustomInput;
