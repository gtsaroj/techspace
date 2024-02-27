import React from "react";
import { WebCategory } from "../../Model/WebCategoryTypes";
import { useNavigate } from "react-router-dom";

const Cost: React.FC = () => {
  const navigate = useNavigate();

  const HandleToRenderPage = (id: number) => {
    const webcategorypath = WebCategory?.find(
      (singlecategory) => singlecategory.id === id
    );
    if (!webcategorypath) {
      console.warn("path url did not found");
    }
    navigate(`${webcategorypath?.path}`);
  };
  return (
    <div className="flex flex-col items-stretch gap-10">
      <h3 className="sm:text-[30px] text-[25px] text-center">Choose software you require</h3>
      <div>
        <div className="flex flex-col gap-1 sm:gap-2 items-start">
          <h3 className="sm:text-[25px] text-[20px] ">Web Category</h3>
          <div className="flex sm:flex-row flex-col w-full sm:items-center items-stretch gap-3  px-5 py-5">
            {WebCategory?.map((singlecategory) => (
              <button
                key={singlecategory.id}
                onClick={() => HandleToRenderPage(singlecategory.id)}
                className="py-2 px-4 bg-[var(--primary-color)] text-[var(--light-text)] rounded-md"
              >
                {singlecategory.title}
              </button>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cost;
