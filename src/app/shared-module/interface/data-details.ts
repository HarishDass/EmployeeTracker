export interface environment {
  apiUrl: string;
}

export interface DataDetails {
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
  present: boolean;
  absent: boolean;
  withPermission: boolean;
  withoutPermission: boolean;
  AttendanceDate: string;
  reason: string;
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
export interface TableHead {
  header: string;
}

export interface Departments {
  name: string;
}
