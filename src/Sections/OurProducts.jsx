import React from "react";
import Product1 from "../assets/Products/Product1.png";
import { Star } from "lucide-react";
const OurProducts = () => {
  return (
    <div className="px-10 py-10 space-y-10">
      <h2 className="heading1">Our Products</h2>
      <h3 className="heading2">
        The night is dark and full of terrors. What is dead may never die. And
        now his watch is ended. All men must die.
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {[
          { img: Product1, title: "2", description: "3", price: "10", star: 4 },
          { img: Product1, title: "1", description: "1", price: "10", star: 4 },
          { img: Product1, title: "1", description: "1", price: "10", star: 4 },
          { img: Product1, title: "2", description: "3", price: "10", star: 4 },
          { img: Product1, title: "1", description: "1", price: "10", star: 4 },
          { img: Product1, title: "1", description: "1", price: "10", star: 4 },
        ].map((ele) => (
          <div>
            <img src={ele.img} className="w-full" />
            <div className="p-3">

              <div className="flex flex-col items-start md:flex-row md:justify-between heading2">
                Price:{ele.price}/-{" "}
                <div className="flex">
                  {Array.from({ length: ele.star }).map(() => (
                    <Star fill="#FFDF28" stroke="none" className="outline-0 ring-0" />
                  ))}
                </div>
              </div>
              <h2 className="heading2 !text-left">{ele.title}</h2>
              <p className="heading2 !text-left">{ele.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurProducts;
