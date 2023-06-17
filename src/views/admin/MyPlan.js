import React from "react";

// components
import CardTable from "../../components/Cards/CardTable";


export default function MyPlan() {
  return (
    <div className="container">
      <section className="block relative z-1 bg-blueGray-300 ">
      <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  mt-24">
            <CardTable/>
            </div>
        </div>
        </div>
      </section>
    </div>
  );
}
