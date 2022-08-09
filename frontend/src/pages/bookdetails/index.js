import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BookActions } from "../../store/actions";
import { Box, Typography } from "@mui/material";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { CustomButton, DeleteModal } from "./../../components";
import { BorrowModal, EditModal } from "./components";

const BookDetails = () => {
  const [open, setOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [borrow, setBorrow] = useState(false);

  const { loading, book, error } = useSelector((state) => state.BookReducer);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteBook = () => {
    dispatch(BookActions.deleteBook(id));
    navigate("/books", { replace: true });
  };

  const getDateFormat = (date) =>
    date &&
    new Date(date).toLocaleDateString("en-CA", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

  useEffect(() => {
    dispatch(BookActions.getBookById(id));
  }, [dispatch, id]);

  return (
    <Box>
      {error ? <Typography variant="h4">{error}</Typography> : null}
      {loading ? (
        <AiOutlineLoading3Quarters />
      ) : (
        <Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              style={{
                textTransform: "capitalize",
                marginBottom: 10,
              }}
            >
              {book?.name}
            </Typography>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                color: "rgba(0, 0, 0, 0.54)",
              }}
            >
              <MdModeEditOutline
                onClick={() => setOpen(!open)}
                size={25}
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
              <MdDelete
                onClick={() => setDeleteModal(!deleteModal)}
                size={25}
                style={{
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{
                  textTransform: "capitalize",
                  fontWeight: 700,
                  marginRight: 2,
                }}
              >
                Author:
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  textTransform: "capitalize",
                }}
              >
                {book?.author}
              </Typography>
            </Box>
            {book?.borrowedBy && (
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: 700,
                    marginRight: 2,
                  }}
                >
                  Borroweb By:
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {book?.borrowedBy}
                </Typography>
              </Box>
            )}
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            {book?.expectedReturnDate && (
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: 700,
                    marginRight: 2,
                  }}
                >
                  Expected Return Date:
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {getDateFormat(book?.expectedReturnDate)}
                </Typography>
              </Box>
            )}
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CustomButton onClick={() => setBorrow(!borrow)}>
              Borrow
            </CustomButton>
          </Box>
        </Box>
      )}
      <EditModal open={open} toggleModal={setOpen} data={book} />
      <DeleteModal
        open={deleteModal}
        toggleModal={setDeleteModal}
        title="Delete"
        subTitle="Are you sure you want to delete this book?"
        delteFunction={deleteBook}
      />
      <BorrowModal open={borrow} toggleModal={setBorrow} data={book} />
    </Box>
  );
};

export default BookDetails;
