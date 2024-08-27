const Letters = () => {
  const englishAlphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  return (
    <div className="flex-1 flex items-center  justify-center ">
      <div className="flex justify-center flex-wrap gap-2 ">
        {englishAlphabet.map((item) => {
          console.log(item);
          return (
            <h3
              className="bg-indigo-700 text-white text-2xl md:text-3xl rounded-sm grid place-items-center w-12 md:w-16 h-12 md:h-16 cursor-pointer "
              key={item}>
              {item}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default Letters;
