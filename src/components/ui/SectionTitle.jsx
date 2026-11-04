
export const SectionTitle = ({ children, className = "", size = "text-[25px] sm:text-4xl md:text-5xl lg:text-[56px]", }) => {
  return (
    <h2
      className={`mt-2  ${size} font-semibold leading-[30px] sm:leading-[66px] uppercase text-white ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;