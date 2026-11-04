const Paragraph = ({ children, className = "" }) => {
  return (
    <p
      className={`text-[13px] sm:text-[18px] font-normal leading-[20px] sm:leading-[28px] capitalize tracking-[0px] text-white ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;