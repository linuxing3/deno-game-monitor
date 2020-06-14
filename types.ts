// deno-lint-ignore-file
export interface IProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
}

export interface IGame {
  id?: string;
  name: string;
  description: string;
  pid: number;
  timestramp: string;
}

export interface IUser {
  id?: string;
  name: string;
  password: string;
  email?: string;
}

export interface IDepartment {
  id?: string;
  name: string;
}

export interface IDocument {
  id?: string;
  year?: string;
  date?: string;
  classiLevel?: string;
  category?: string;
  inOrOut?: string;
  sendingCode?: string;
  orderedNumber?: string;
  title: string;
  content?: string;
  toEntity?: string;
  copyEntity?: string;
  attachment?: string;
  keyword?: string;
  workEntity?: string;
  author?: string;
}

export interface IDocumentType {
  id?: string;
  title: string;
}

export interface IEmployee {
  id?: string;
  salutation?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  image?: string;
  status?: string;
  employeeNo?: string;
  gender?: string;
  birthday?: string;
  joiningDate?: string;
  emergencyContact?: string;
  emergencyPhoneNo?: string;
  contractStartDate?: string;
  contractEndDate?: string;
  department?: string;
  designation?: string;
  reportsTo?: string;
  grade?: string;
  branch?: string;
  leavePolicy?: string;
  holidayList?: string;
  salaryMode?: string;
  bankName?: string;
  bankAccount?: string;
  healthInsurance?: string;
  healthInsuranceProvider?: string;
  healthInsuranceNo?: string;
  cellPhone?: string;
  preferedEmail?: string;
  companyEmail?: string;
  personalEmail?: string;
  unsubscribed?: string;
  permanentAccommodation?: string;
  permanentAddress?: string;
  currentAccomodation?: string;
  currentAddress?: string;
  bio?: string;
  passportNumber?: string;
  dateOfIssue?: string;
  placeOfIssue?: string;
  maritalStatus?: string;
  bloodGroup?: string;
  familyBackground?: string;
  healthDetails?: string;
  educationalQualification?: string;
  previousWorkExperience?: string;
  externalWorkHistory?: string;
  historyInCompany?: string;
  relievingDate?: string;
  reasonForLeaving?: string;
  leaveEncashed?: string;
  encashDate?: string;
  resiged?: string;
  reasonForResignation?: string;
  feedback?: string;
}

export interface IEvent {
  id?: string;
  title: string;
  private?: string;
  date?: string;
  startTime?: string;
  duration?: string;
  applicant?: string;
  participants?: string;
  guests?: string;
  content?: string;
  currentDate?: string;
  reportDate?: string;
  reportContent?: string;
  instructionDate?: string;
  instruction?: string;
  priority?: string;
  userId?: string;
  projectId?: string;
}

export interface IMember {
  id?: string;
  department?: string;
  name: string;
  gender?: string;
  birthday?: string;
  etnia?: string;
  academicBackground?: string;
  foreignLanguage?: string;
  politicalRole?: string;
  positionAndRank?: string;
  militantRole?: string;
  duty?: string;
  fromEntity?: string;
  arrivingDate?: string;
  rotatingDate?: string;
  sendingEntity?: string;
  conyugeName?: string;
  conyugeEntity?: string;
  conyugeBonus?: string;
  memo?: string;
  protocolId?: string;
  isActive?: string | boolean;
  militant?: string;
  appraisals?: string[] | any[];
  designations?: string[] | any[];
  projects?: string[] | any[];
}

export interface IProject {
  id?: string;
  title: string;
  type?: string;
  status?: string;
  isActive?: string;
  percentComplete?: string;
  expectedStartDate?: string;
  expectedEndDate?: string;
  priority?: string;
  department?: string;
  tasks?: any[];
  notes?: string;
  actualStartDate?: string;
  actualEndDate?: string;
  estimatedCost?: string;
  totalCost?: string;
  ExpenseClaim?: string;
  collectProgress?: string;
  frequency?: string;
  fromTime?: string;
  toTime?: string;
}

export interface IUserMilitant {
  id?: string;
  name?: string;
  admistionDate?: string;
  formalizationDate?: string;
  registerDate?: string;
  transferDate?: string;
}

export interface IUserPromotion {
  id?: string;
  name?: string;
  department?: string;
  promotionDate?: string;
  promotionDetails?: string;
}

export interface IVehicle {
  id?: string;
  licensePlate?: string;
  mark: string;
  model?: string;
  details?: string;
  lastOdometerValue?: string;
  location?: string;
  chassisNo?: string;
  value?: string;
  insuranceDetails?: string;
  insuranceCompany?: string;
  policyNo?: string;
  startDate?: string;
  endDate?: string;
  additionalDetails?: string;
  fueltype?: string;
  fuelUom?: string;
  color?: string;
  wheels?: string;
  door?: string;
}
