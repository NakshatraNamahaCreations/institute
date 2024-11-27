import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import TopHeader from "../TopHeader";
function Dashboard() {
  const data = [
    {
      name: "Monday",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Tuesday",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Wednesday",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Thursday",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Friday",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Saturday",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sunday",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <div className="dash-card">
        <div className="dashbard-card">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card-dash ">
                  <div className="d-flex justify-content-between">
                    <IoSchoolSharp style={{ fontSize: "25px" }} />
                    <div className="total-student">Total Students</div>
                  </div>
                  <div className="">
                    <p className="total-p">49999.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-dash ">
                  <div className="d-flex justify-content-between">
                    <IoSchoolSharp style={{ fontSize: "25px" }} />
                    <div className="total-student">Total Products</div>
                  </div>
                  <div className="">
                    <p className="total-p">49999.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-dash ">
                  <div className="d-flex justify-content-between">
                    <IoSchoolSharp style={{ fontSize: "25px" }} />
                    <div className="total-student">New Tickets</div>
                  </div>
                  <div className="">
                    <p className="total-p">49999.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="line-chart">
              <div className="">
                <h4>Sales</h4>
                <p>Student Who took the new subscriptions </p>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
