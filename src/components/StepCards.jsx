import React, { useEffect, useState } from "react";

const Step = ({ icon, title, bgColor }) => {
  return (
    <div
      className={`flex flex-col gap-2 w-full lg:h-[240px] 2xl:h-[260px] h-[220px] sm:h-[240px] justify-center items-center p-2 md:p-4`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-center mb-2">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <img src={icon} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>
      <h3 className="text-sm sm:text-base font-medium mb-1 text-center">
        {title}
      </h3>
    </div>
  );
};

const Steps = () => {
  const steps = [
    { icon: "/signup.svg", title: "Select Your Role and Sign Up" },
    { icon: "/requirements.svg", title: "Buyers Post Your Requirements" },
    { icon: "/review.svg", title: "Review, Select, and Contact the Best Suppliers" },
    { icon: "/edit.svg", title: "Suppliers Complete Your Profile and Get Notified for Opportunities" },
    { icon: "/quote.svg", title: "Contact Buyers and Share Your Quote for the Service" },
    { icon: "/connect.svg", title: "Both Parties Can Connect and Make Business, Leave a Feedback" },
  ];

  const [columns, setColumns] = useState(
    window.innerWidth >= 640 ? 3 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setColumns(3);
      else setColumns(2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateBgColor = (index, columns) => {
    const row = Math.floor(index / columns);
    const col = index % columns;
    return (row + col) % 2 === 0 ? "#E8FBFF" : "#FFFFFF";
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div
        className={`grid`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            icon={step.icon}
            title={step.title}
            bgColor={calculateBgColor(index, columns)}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
