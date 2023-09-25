export interface ProfileInterface {
  id: number;
  employeeName: string;
  dateOfBirth: string;
  mobileNo: number;
  nationality: string;
  dateOfJoining: string;
  department: string;
  gender: string;
  Active: boolean;
  address: Address;
  fatherName: string;
  EmployeeNo: number;
  Photo: string;
  qualification: string;
  CTC: string;
  email: string;
  experience: string;
  totalyear: number;
  yearOfExperience: YearOfExperience[];
  emergencyContactNumber: number;
  panNumber: string;
}

export interface Address {
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  pincode: string;
}

export interface YearOfExperience {
  companyName: string;
  joinDate: string;
  endDate: string;
}

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

export interface Inactive {
  employeeName: string;
}
