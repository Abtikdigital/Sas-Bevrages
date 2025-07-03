import ProcessImage from "../assets/Products/Product1.png";

const OurProductionProcess = () => {
  return (
    <div className="space-y-10 ">
      <h2 className="heading1">Our Production Process </h2>
      <p className="heading2">
        The night is dark and full of terrors. What is dead may never die. And
        now his watch is ended. All men must die.
      </p>
      <div className="grid grid-cols-1   md:grid-rows-2 md:grid-cols-3 gap-10 p-10">
        <div className="md:row-span-2 ">
          <img src={ProcessImage} className="h-full w-full" />
        </div>
        <div>
          <img src={ProcessImage} className="h-full w-full" />
        </div>

        <div className="md:row-span-2">
          <img src={ProcessImage} className="h-full w-full" />
        </div>
        <div>
          <img src={ProcessImage} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};
export default OurProductionProcess;
