const Man = ({ wrongLength }) => {
  return (
    <div className="bg-slate-100 h-full relative  flex-1     ">
      <div className="stand">
        <div className="rope"></div>
      </div>
      <div className="man ">
        <div className={`head ${wrongLength > 0 ? "flex" : "hidden"} `}></div>
        <div className={`body ${wrongLength > 1 ? "flex" : "hidden"} `}></div>
        <div
          className={`handRight ${wrongLength > 2 ? "flex" : "hidden"} `}></div>
        <div
          className={`handLeft ${wrongLength > 3 ? "flex" : "hidden"} `}></div>
        <div
          className={`legRight ${wrongLength > 4 ? "flex" : "hidden"} `}></div>
        <div
          className={`legLeft ${wrongLength > 5 ? "flex" : "hidden"} `}></div>
      </div>
    </div>
  );
};

export default Man;
