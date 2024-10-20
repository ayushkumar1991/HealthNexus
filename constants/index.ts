export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Aadhar Card",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "National Identity Card",
  "Passport",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "DR.Sharma",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "DR.Verma",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "DR.Rakesh",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "DR.Utobo",
  },
  // {
  //   image: "/assets/images/dr-powell.png",
  //   name: "Jane Powell",
  // },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Dr.Helo",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "DR.Me",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "DR.Creed",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "DR.Hardik",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
