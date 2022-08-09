import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { StudentActions } from "../../store/actions";
import { Box, Typography } from "@mui/material";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { DeleteModal } from "../../components";
import { EditModal } from "./components";

const StudentDetails = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const { loading, student, error } = useSelector(
    (state) => state.StudentReducer
  );

  const deleteStudent = () => {
    dispatch(StudentActions.deleteStudent(id));
    navigate("/", { replace: true });
  };

  useEffect(() => {
    dispatch(StudentActions.getStudentByID(id));
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
              {student?.firstname} {student?.lastname}
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
        </Box>
      )}
      <DeleteModal
        open={deleteModal}
        toggleModal={setDeleteModal}
        title="Delete"
        subTitle="Are you sure you want to delete this student?"
        delteFunction={deleteStudent}
      />
      <EditModal open={open} toggleModal={setOpen} data={student} />
    </Box>
  );
};

export default StudentDetails;
