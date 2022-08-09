import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { CustomButton } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { BookActions } from "../../store/actions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BookModal } from "./components";
import Paper from "@mui/material/Paper";

const Books = () => {
  const [open, setOpen] = useState(false);

  const { loading, books, error } = useSelector((state) => state.BookReducer);

  const dispatch = useDispatch();

  const getDateFormat = (date) =>
    date &&
    new Date(date).toLocaleDateString("en-CA", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

  useEffect(() => {
    dispatch(BookActions.getAllBooks());
  }, [dispatch]);

  return (
    <Box>
      {error ? <Typography variant="h4">{error}</Typography> : null}
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Typography variant="h4">Books</Typography>
        <CustomButton onClick={() => setOpen(!open)}>Create Book</CustomButton>
      </Box>
      {loading ? (
        <AiOutlineLoading3Quarters />
      ) : books?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              style={{
                backgroundColor: "#f5f5f5",
              }}
            >
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: 17,
                  }}
                  align="left"
                >
                  Name
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: 17,
                  }}
                  align="left"
                >
                  Author
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: 17,
                  }}
                  align="left"
                >
                  Borrowed By
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: 17,
                  }}
                  align="left"
                >
                  Return Date
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <TableRow
                  key={book.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {book.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {book.author}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {book.borrowedBy}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {getDateFormat(book.expectedReturnDate)}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link to={`/book/${book.id}`}>
                      <CustomButton>Details</CustomButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h6">No Books Found</Typography>
      )}
      <BookModal open={open} toggleModal={setOpen} />
    </Box>
  );
};

export default Books;
