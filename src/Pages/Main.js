import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="">
      <section className="text-gray-800 bg-slate-800">
        <div className="px-6 py-0 md:px-12 text-center lg:text-left">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 flex items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-4xl text-white md:text-5xl xl:text-6xl font-bold tracking-tight mb-4">
                  Gideon Okuro
                </h1>
                <h1 className="text-3xl text-white md:text-3xl xl:text-3xl font-bold tracking-tight mb-4">
                  Android Developer
                </h1>
                <p className="text-lg text-white">
                  I am an Android Developer with 2 years of experience
                  developing android applications using java and kotlin. I am
                  open to new opportunities and working on projects.
                </p>
                <button className="mt-4 bg-transparent hover:bg-blue text-white font-semibold py-2 px-4 border border-white hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 rounded">
                  Contact Me
                </button>
                <div class="flex justify-center mt-2 md:flex-row">
                  <img
                    className="bg-transparent mr-2 w-10 h-10"
                    src={require("../../src/lIn.png")}
                  />
                  <img
                    className="bg-transparent mr-2 w-10 h-10"
                    src={require("../../src/github.png")}
                  />
                  <img
                    className="bg-transparent w-10 h-10 "
                    src={require("../../src/twitter.png")}
                  />
                </div>
              </div>
              <img
                className="bg-transparent"
                src={require("../../src/proftr.png")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-800 bg-slate-900">
        <div className="px-6 py-0 md:px-12 text-center lg:text-left">
          <div className="container mx-auto">
            <h1 className="text-3xl text-white md:text-3xl xl:text-3xl font-bold tracking-tight mb-4">
              Projects
            </h1>
            <ul class="list-disc">
              <li className="text-2xl text-slate-500 md:text-2xl xl:text-2xl font-bold tracking-tight mb-4">
                Gari
              </li>
              <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                <div className="mt-12 lg:mt-0">
                  <p className="text-white">
                    Gari is mobile solution for car hiring companies that offer
                    self-drive and chauffeured car rental services with a huge
                    variety of cars to select from. It allows user to Search,
                    book and pay for a vehicle online in minutes.
                  </p>

                  <h4 className="text-white underline mt-2">
                    Tools and Technologies Used
                  </h4>
                  <div className="flex flex-row">
                    <Icon className="mr-2 w-16 h-16" icon="logos:kotlin" />
                    <Icon
                      className="mr-2 w-14 h-14"
                      icon="ri:android-fill"
                      color="mediumspringgreen"
                    />
                    <Icon className="mr-2 w-16 h-16" icon="logos:postman" />
                    <Icon className="mr-2 w-16 h-16" icon="logos:heroku" />
                    <Icon className="mr-2 w-14 h-14" icon="logos:postgresql" />
                    <Icon
                      className="mr-2 w-14 h-14"
                      icon="fa-brands:node"
                      color="#3c873a"
                    />
                    <Icon
                      className="mr-2 w-14 h-14"
                      icon="vscode-icons:file-type-reactjs"
                    />
                  </div>
                  <h4 className="text-white underline mt-2">
                    My role in the project
                  </h4>
                  <div className="ml-4">
                    <ol class="list-decimal text-white">
                      <li>
                        Establishing a project schedule, determining and
                        managing each phase
                      </li>
                      <li>Determining the methodology used on the project</li>
                      <li>
                        Define the technical and functional architecture of the
                        overall system.
                      </li>
                      <li>Develop the features laid out in the Sprint.</li>
                      <li>
                        Designed UI, implemented UI and consumed endpoints for
                        the mobile app.
                      </li>
                      <li>
                        Designed and developed API endpoints to ensure
                        functionality of the app.
                      </li>
                      <li>
                        Designed and Developed admin portal for administration
                        purposes.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Main;
