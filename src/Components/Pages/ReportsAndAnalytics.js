import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Navigate, useNavigate } from "react-router-dom";

const data = [
  { name: "2020", uv: 4000, pv: 2400, amt: 2400 },
  { name: "2021", uv: 3000, pv: 1398, amt: 2210 },
  { name: "2022", uv: 2000, pv: 9800, amt: 2290 },
  { name: "2023", uv: 2780, pv: 3908, amt: 2000 },
  { name: "2024", uv: 1890, pv: 4800, amt: 2181 },
];

function ReportsAndAnalytics() {
  const data1 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Define columns for DataGrid
  const columns = [
    { field: "col1", headerName: "S.No.", width: 100 },
    {
      field: "col2",
      headerName: "Name",
      width: 200,
      renderCell: (params) => <div>Anurag</div>,
    },
    {
      field: "col3",
      headerName: "Class",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>12th</div>
        </div>
      ),
    },
    {
      field: "col4",
      headerName: "Date",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>25/11/2024</div>
        </div>
      ),
    },
    {
      field: "col4",
      headerName: "Amount",
      width: 200,
      renderCell: (params) => (
        <div>
          <div>5000</div>
        </div>
      ),
    },
  ];

  // Define rows for DataGrid
  const rows = [
    {
      id: 1,
      col1: "1",
      col3: "Category A",
      col4: "Service A",
    },
    {
      id: 1,
      col1: "1",
      col3: "Category A",
      col4: "Service A",
    },
    {
      id: 1,
      col1: "1",
      col3: "Category A",
      col4: "Service A",
    },
  ];

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/paymentreports");
  };

  return (
    <div className="px-2">
      <div className="row">
        <div className="col-md-6 mb-2">
          <div className="report-a">
            <div
              className="pt-2 pb-3"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              Sales
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="pv"
                  fill="#8884d8"
                  shape={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                  dataKey="uv"
                  fill="#82ca9d"
                  shape={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div className="report-a">
            <div
              className="pt-2 pb-3"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              Products
            </div>
            <div className="">Percentages of revenue contribution</div>
            <div className="pai-0">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={data1}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data1.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="report-jee">
                <div
                  className="mt-2"
                  style={{ fontWeight: "600", color: "#0088fe" }}
                >
                  JEE Main{" "}
                  <span
                    style={{
                      fontWeight: "400",
                      paddingLeft: "20px",
                      color: "#0088fe",
                    }}
                  >
                    33%
                  </span>
                </div>
                <div
                  className="mt-2"
                  style={{ fontWeight: "600", color: "#ff8042" }}
                >
                  JEE advanced{" "}
                  <span
                    style={{
                      fontWeight: "400",
                      paddingLeft: "20px",
                      color: "#ff8042",
                    }}
                  >
                    17%
                  </span>
                </div>
                <div
                  className="mt-2"
                  style={{ fontWeight: "600", color: "#ffbb28" }}
                >
                  JEE Main{" "}
                  <span
                    style={{
                      fontWeight: "400",
                      paddingLeft: "20px",
                      color: "#ffbb28",
                    }}
                  >
                    25%
                  </span>
                </div>
                <div
                  className="mt-2"
                  style={{ fontWeight: "600", color: "#00c49f" }}
                >
                  CET{" "}
                  <span
                    style={{
                      fontWeight: "400",
                      paddingLeft: "20px",
                      color: "#00c49f",
                    }}
                  >
                    25%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="report-a">
            <div
              className="pt-2 pb-3"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              New Joining
            </div>
            <div className=" mb-3">
              Category of students who joined the course
            </div>
            <div style={{ width: "200px" }}>
              <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                  textColor: "#f88",
                  pathColor: "black",
                  trailColor: "grey",
                })}
              />
              <div className="px-4 mt-3" style={{}}>
                <div className="">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Class 11th"
                  />
                </div>
                <div className="">
                  {" "}
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Class 12th"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-8"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div className="" style={{ fontSize: "18px", fontWeight: "600" }}>
              Payment reports{" "}
            </div>
            <div className="search-container">
              <div
                className=""
                style={{
                  borderBottom: "2px solid black",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
                onClick={handleNavigation}
              >
                View All
              </div>
            </div>
          </div>
          <Box sx={{ width: "100%" }}>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="pt-3"
            >
              <DataGrid rows={rows} columns={columns} autoHeight />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ReportsAndAnalytics;
