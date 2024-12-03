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
import QuestionManagments from "./Components/Pages/QuestionManagments";
import QuestionAdd from "./Components/Pages/QuestionAdd";
import InputQuestion from "./Components/Pages/InputQuestion";
import BatchesCreations from "./Components/Pages/BatchesCreations";
import InputBatchesCreations from "./Components/Pages/InputBatchesCreations";
import PreviewBatch from "./Components/Pages/PreviewBatch";
import ProductServices from "./Components/Pages/ProductServices";
import AddTestSeries from "./Components/Pages/AddTestSeries";
import TestCreation from "./Components/Pages/TestCreation";
import TestTemplateCreation from "./Components/Pages/TestTemplateCreation";
import AddQuestionsDetails from "./Components/Pages/AddQuestionDetails";
import QuestionDeatialsID from "./Components/Pages/QuestionDeatialsID";
import Login from "./Components/Pages/Login";
import UploadOMR from "./Components/Pages/UploadOMR";
import Marketing from "./Components/Pages/Marketing";
import AddBanner from "./Components/Pages/AddBanner";
import PaymentandSub from "./Components/Pages/PaymentandSub";
import StudentPaymentWithId from "./Components/Pages/StudentPaymentWithId";
import Wallet from "./Components/Pages/Wallet";
import WalletDetailsId from "./Components/Pages/WalletDetailsId";
import Ticket from "./Components/Pages/Ticket";
import ReslovedTickets from "./Components/Pages/ResolvedTickets";
import Testimonials from "./Components/Pages/Testimonials";
import Notificationss from "./Components/Pages/Notificationss";
import ReportsAndAnalytics from "./Components/Pages/ReportsAndAnalytics";
import TermsConditions from "./Components/Pages/TermsConditions";
import AppLogo from "./Components/Pages/AppLogo";
import PaymentReportss from "./Components/Pages/PaymentReportss";
import PaymentReportId from "./Components/Pages/PaymentReportId";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />
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

          <Route
            path="/questionmanagments"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Question Managments" />
                      <QuestionManagments />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/addquestion"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Add Question" />
                      <QuestionAdd />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/inputquestions"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Add Question" />
                      <InputQuestion />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/batchescreations"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Batches Creation" />
                      <BatchesCreations />
                    </>
                  }
                />
              </>
            }
          />

          <Route
            path="/inputbatchcrations"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Batches Creation" />
                      <InputBatchesCreations />
                    </>
                  }
                />
              </>
            }
          />

          <Route
            path="/batchcreations"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Batches Creation" />
                      <PreviewBatch />
                    </>
                  }
                />
              </>
            }
          />

          <Route
            path="/product-services"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Product & Services" />
                      <ProductServices />
                    </>
                  }
                />
              </>
            }
          />

          <Route
            path="/product-services-test"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Product & Services" />
                      <AddTestSeries />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/uploadimage"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Upload OMR" />
                      <UploadOMR />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/test/series-details"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Product & Services" />
                      <ProductServices />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/test-creations"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Test Creation" />
                      <TestCreation />
                    </>
                  }
                />
              </>
            }
          />

          <Route
            path="/testtemplatecreations"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Test Creation" />
                      <TestTemplateCreation />
                    </>
                  }
                />
              </>
            }
          />

          <Route
            path="/addquestiondetails"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Test Creation" />
                      <AddQuestionsDetails />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/addquestiondetails/:id"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Test Creation" />
                      <QuestionDeatialsID />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/marketing"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Marketing" />
                      <Marketing />
                    </>
                  }
                />
              </>
            }
          />
          {/* Add Banner */}
          <Route
            path="/add-banner"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Marketing" />
                      <AddBanner />
                    </>
                  }
                />
              </>
            }
          />
          {/* /addddd*/}
          <Route
            path="/payment-subscriptions"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Payment And Subscriptions" />
                      <PaymentandSub />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/payment-subscriptions/:id"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Payment And Subscriptions" />
                      <StudentPaymentWithId />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/Wallets"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Wallets" />
                      <Wallet />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/walletdetail/:id"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Wallets" />
                      <WalletDetailsId />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/ticket"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Ticket" />
                      <Ticket />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/resloved-ticket"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Ticket" />
                      <ReslovedTickets />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="App-Settings" />
                      <TermsConditions />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/app-logo"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="App-Settings" />
                      <AppLogo />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/testimonials"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Testimonial" />
                      <Testimonials />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/notifications"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Notifications" />
                      <Notificationss />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/reportandanalytics"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Report and Analytics" />
                      <ReportsAndAnalytics />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/paymentreports"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Report and Analytics" />
                      <PaymentReportss />
                    </>
                  }
                />
              </>
            }
          />
          <Route
            path="/payment-reports/:id"
            element={
              <>
                <Main
                  children={
                    <>
                      <TopHeader title="Report and Analytics" />
                      <PaymentReportId />
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
