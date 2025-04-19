import express from "express";

import { getAllPatients, getPatientById, createPatient } from "../services/patientService.js";

const router = express.Router();

// GET /patients
router.get("/", async (req, res, next) => {
  try {
    const patients = await getAllPatients();
    res.status(200).json(patients);
  } catch (error) {
    next(error);
  }
});

// GET /patients/:id
router.get("/:id", async (req, res, next) => {
  try {
    const patient = await getPatientById(req.params.id);
    res.status(200).json(patient);
  } catch (error) {
    next(error);
  }
});

// POST /patients
router.post("/", async (req, res, next) => {
  try {
    const patient = req.body;
    const newPatient = await createPatient(patient);
    res.status(201).json(newPatient);
  } catch (error) {
    next(error);
  }
})
// PUT /patients/:id
// DELETE /patients/:id

export default router;