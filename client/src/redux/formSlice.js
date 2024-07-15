// // src/redux/formSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   initiatorName: "Gaurav Meena",
//   initiationDate: new Date().toLocaleDateString(),
//   reviewer: "",
//   approver: "",
//   drafter: "",
//   executor: "",
//   documentName: "",
//   documentDescription: "",
//   shortDescription: "",
// };

// const formSlice = createSlice({
//   name: "form",
//   initialState,
//   reducers: {
//     setInitiatorName: (state, action) => {
//       state.initiatorName = action.payload;
//     },
//     setInitiationDate: (state, action) => {
//       state.initiationDate = action.payload;
//     },
//     setReviewer: (state, action) => {
//       state.reviewer = action.payload;
//     },
//     setApprover: (state, action) => {
//       state.approver = action.payload;
//     },
//     setDrafter: (state, action) => {
//       state.drafter = action.payload;
//     },
//     setExecutor: (state, action) => {
//       state.executor = action.payload;
//     },
//     setDocumentName: (state, action) => {
//       state.documentName = action.payload;
//     },
//     setDocumentDescription: (state, action) => {
//       state.documentDescription = action.payload;
//     },
//     setShortDescription: (state, action) => {
//       state.shortDescription = action.payload;
//     },
//   },
// });

// export const {
//   setInitiatorName,
//   setInitiationDate,
//   setReviewer,
//   setApprover,
//   setDrafter,
//   setExecutor,
//   setDocumentName,
//   setDocumentDescription,
//   setShortDescription,
// } = formSlice.actions;

// export default formSlice.reducer;



// src/redux/formSlice.js


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initiatorName: 'Gaurav Meena',
  initiationDate: new Date().toLocaleDateString(),
  reviewer: '',
  approver: '',
  drafter: '',
  executor: '',
  documentName: '',
  documentDescription: '',
  shortDescription: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;
