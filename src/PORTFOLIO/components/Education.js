import React from "react";
import "./css/Education.css";
import edu from "./image/edu1.png";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <motion.div className="education" id="education"
        initial={{x:"100vw"}}
        animate={{x:0}}
        // exit={{x:"-100vw"}}
    >
      <div className="container">
        <div className="row head">
          <span>
            <span>E</span>ducation
          </span>
        </div>
        <div className=" edu-details">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#degree"
              >
                DEGREE
              </button>
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#diploma"
              >
                DIPLOMA
              </button>
              <button
                className="nav-link "
                data-bs-toggle="tab"
                data-bs-target="#sslc"
              >
                SSLC
              </button>
            </div>
          </nav>
          <div className="tab-content" id="educationtab">
            <div className="tab-pane fade   eduinfoanim" id="sslc">
              <table className="table p-3 m-3">
                <thead></thead>
                <tbody>
                  <tr>
                    <th>Name of the School</th>
                    <td className="">Government Higher Secondary School</td>
                  </tr>
                  <tr>
                    <th>Board</th>
                    <td className="">State Board of Secondary Education</td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td className="">Thaniyamangalam</td>
                  </tr>
                  <tr>
                    <th>Marks</th>
                    <td className="">432</td>
                  </tr>
                  <tr>
                    <th>Percentage</th>
                    <td className="">86 %</td>
                  </tr>
                  <tr>
                    <th>Year</th>
                    <td className="">2017-2018</td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
            <div className="tab-pane fade eduinfoanim" id="diploma">
              <table className="table m-3 ">
                <thead></thead>
                <tbody>
                <tr>
                  <th>Name of the College</th>
                  <td className="">Tamilnadu Government Polytechnic College</td>
                </tr>
                <tr>
                  <th>Board</th>
                  <td className="">State Board of Technical Education</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td className="">Madurai</td>
                </tr>
                <tr>
                  <th>Percentage</th>
                  <td className="">88 %</td>
                </tr>
                <tr>
                  <th>Year</th>
                  <td className="">2018-2021</td>
                </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
            <div className="tab-pane fade show active eduinfoanim" id="degree">
              <table className="table m-3 ">
                <thead></thead>
                <tbody>
                <tr>
                  <th>Name of the College</th>
                  <td className="">Anna University Regional Campus</td>
                </tr>
                <tr>
                  <th>University</th>
                  <td className="">Anna University</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td className="">Madurai</td>
                </tr>
                <tr>
                  <th>CGPA</th>
                  <td className="">7.94 / 10 (till 7th sem) </td>
                </tr>
                <tr>
                  <th>Year</th>
                  <td className="">2021-2024 </td>
                </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
            <div className="eduimage d-none d-lg-block">
              <img src={edu} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
