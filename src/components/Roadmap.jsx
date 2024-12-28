import React from "react";
import Section from "./section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { grid } from "../assets";
import TagLine from "./Tagline";
import { check, check2, loading1 } from "../assets";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Read to get started" title="What we're working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In Progress";
            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      className="w-full"
                      alt="Grid"
                      height={550}
                      width={550}
                    />
                  </div>

                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-2-[27rem] mb-8 md:mb-20">
                      <TagLine>{item.date}</TagLine>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8"></div>
                      <div>
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt="status"
                        />
                        <div className="tagline">{status}</div>
                      </div>

                      <div className="mb-10 -my-10 -mx-15">
                        <img
                          src={item.imageUrl}
                          className="w-full"
                          width={630}
                          height={420}
                          alt={item.title}
                        />
                      </div>
                      <h4 className="h4 mb-4">{item.title}</h4>
                      <p body-2 text-n-4>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
