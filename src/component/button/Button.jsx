// eslint-disable-next-line react/prop-types
const Button = ({ title }) => {
  return (
    <>
      <button className="bg-[#060640] text-[#fff] text-sm font-medium py-[20px] px-[30px] rounded-md">
        {title}
      </button>
    </>
  );
};

export default Button;
