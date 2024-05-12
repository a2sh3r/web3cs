import React from 'react';

const ButtonList = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="ml-auto flex flex-col space-y-5">
        {/* Кнопки будут расположены справа от центра страницы */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded">
          Button 1
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10  rounded">
          Button 2
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10  rounded">
          Button 3
        </button>
      </div>
    </div>
  );
};

export default ButtonList;
