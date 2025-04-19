import { generateUniqueId, readData } from "../helpers.js";

async function getAllPatients() {
  return await readData();
}

async function getPatientById(id) {
  const patients = await readData();
  const patient = patients.find((patient) => patient.id === id);
  if (!patient) throw new Error("notfound");
  return patient;
}

async function createPatient(patient) {
  const newId = generateUniqueId();
  const newPatient = {id: newId, ...patient};

  const patients = await readData();
  patients.push(newPatient);

  await writeData(patients);

  return newPatient;
}

export { getPatientById, getAllPatients, createPatient };
