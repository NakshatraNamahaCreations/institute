import "./App.css";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopHeader from "./Components/TopHeader";
import Dashboard from "./Components/Pages/Dashboard";
import Admin from "./Components/Pages/Admin";
import AdminCategory from "./Components/Pages/AdminCategory";
import ClassType from "./Components/Pages/ClassType";
import MasterSubject from "./Components/Pages/MasterSubject";
import ChapterList from "./Components/Pages/ChapterList";
import SubChapter from "./Components/Pages/SubChapter";
import TextLanguages from "./Components/Pages/TextLanguages";
import ExamTypeList from "./Components/Pages/ExamTypeList";
import Teacher from "./Components/Pages/Teacher";
import SingalTeacher from "./Components/Pages/SingalTeacher";
import Student from "./Components/Pages/Student";
import SingalStudent from "./Components/Pages/SingalStudent";
import SingalStudentStatus from "./Components/Pages/SingalStudentStatus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Dashboard" />
                      <Dashboard />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Admin" />
                      <Admin />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/admin/category"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Admin" />
                      <AdminCategory />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/class"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Master" />
                      <ClassType />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/subject"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Master" />
                      <MasterSubject />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/chapter"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Master" />
                      <ChapterList />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/sub-chapter"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Master" />
                      <SubChapter />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/language"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Master" />
                      <TextLanguages />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/examtype"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Master" />
                      <ExamTypeList />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/teacher"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Teacher" />
                      <Teacher />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/teacher/:id"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Teacher" />
                      <SingalTeacher />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/students"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Students" />
                      <Student />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/students/:id"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Students" />
                      <SingalStudent />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/students/status/:id"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Students" />
                      <SingalStudentStatus />
                    </>
                  }
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
