export interface environment {
  apiUrl: string;
}

export interface EmployeData {
  id: number;
  employeeName: string;
  dateOfBirth: string;
  mobileNo: number;
  nationality: string;
  dateOfJoining: string;
  deportment: string;
  gender: string;
  Active: boolean;
  address: Address;
  fatherName: string;
  EmployeeNo: number;
  Photo: string;
  qualification: number;
  CTC: string;
  email: string;
  experience: string;
  yearOfExperience: YearOfExperience[];
  emergencyContactNumber: number;
  panNumber: string;
}

export interface Address {
  '1st street': string;
  '2st street': string;
  city: string;
  state: string;
  'pin code': string;
}

export interface YearOfExperience {
  companyName: string;
  joinDate: string;
  endDate: string;
}

export interface CardDetails {
  cardName: string;
}
