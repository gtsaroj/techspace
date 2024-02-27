import React, { useEffect, useState } from "react";
import "./StepWise.css";
import { QueryData, QueryDataType } from "../Model/QueryDataType";

const Static: React.FC = () => {
  const [ActiveStep, setActiveStep] = useState<number | 0>(0);
  const [StoreQueryData, SetStoreQueryData] = useState<QueryDataType>();

  useEffect(() => {
    const questionAndoption = QueryData.find(
      (singlequery) => singlequery.id == ActiveStep
    );

    SetStoreQueryData(questionAndoption);
  }, [ActiveStep]);

  return (
    <div className=" h-[100vh] w-full flex  flex-col gap-10 justify-start pt-10 items-center">
      <div className=" sm:px-10 px-2 flex w-full flex-col justify-between sm:gap-10 gap-4 items-stretch">
        <div className="flex w-full  sm:gap-10 gap-2  justify-center  py-5 px-6 bg-slate-400 items-center">
          {QueryData?.map((singleItem) => (
            <div key={singleItem.id} className="step-item z-0">
              <div
                className={` ${
                  ActiveStep === singleItem.id ? "active" : "step"
                }`}
              >
                {singleItem.id}
              </div>
            </div>
          ))}
        </div>

        <form
          action=""
          key={StoreQueryData?.id}
          className="flex flex-col items-baseline"
        >
          <label htmlFor="" className="text-[30px]">
            {StoreQueryData?.question}
          </label>
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col items-start gap-3">
              {StoreQueryData?.options.map((singleoption) => (
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="radio"
                    name="option"
                    id="name1"
                    value={singleoption}
                    className="w-5 h-5 p-3 cursor-pointer"
                  />
                  <label id="name1">{singleoption}</label>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>

      <div className="w-full  flex justify-center gap-20 items-center">
        <button
          className="bg-[var(--primary-color)] w-[100px] text-center py-2 px-4 rounded-md"
          onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          back
        </button>
        <button
          className="bg-[var(--primary-color)] w-[100px] text-center py-2 px-4 rounded-md"
          onClick={() => setActiveStep((prev) => prev >= 6 ?  prev : prev + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Static;
