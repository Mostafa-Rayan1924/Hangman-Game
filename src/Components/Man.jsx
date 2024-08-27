const Man = () => {
  return (
    <div className="bg-slate-100 h-full relative  flex-1     ">
      <div className="stand">
        <div className="rope"></div>
      </div>
      <div className="man hidden">
        <div className="head"></div>
        <div className="body"></div>
        <div className="handRight"></div>
        <div className="handLeft"></div>
        <div className="legRight"></div>
        <div className="legLeft"></div>
      </div>
    </div>
  );
};

export default Man;
