import { Route, Routes } from "react-router-dom";
import { BookDetails, Books, StudentDetails, Students } from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Students />} />
      <Route path="/books" element={<Books />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/student/:id" element={<StudentDetails />} />
    </Routes>
  );
};

export default AppRouter;
