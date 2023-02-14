const variantListArr = [
  {
    variant: "h1",
    className: "text-[40px] md:text-[80px]  xl:text-[128px]",
  },
  {
    variant: "h2",
    className: "text-[20px] lg:text-[24px]",
  },
  {
    variant: "h3",
    className: "text-[16px] lg:text-[20px]",
  },
  {
    variant: "h4",
    className: "text-[12px] lg:text-[16px]",
  },
  {
    variant: "h5",
    className: "text-[10px] lg:text-[14px]",
  },
  {
    variant: "h6",
    className: "text-[8px] lg:text-[12px]",
  },
  {
    variant: "cast",
    className: "text-[12px] md:text-[24px]",
  },
];

export const Heading = ({ children, variant, className }) => {
  const variantItem = variantListArr.find((item) => item.variant === variant);
  console.log(variantItem);
  const isClassName = className ? className : "";
  return (
    <variantItem.variant className={variantItem.className + " " + isClassName}>
      {children}
    </variantItem.variant>
  );
};
