export interface employeeForm {
  employeeName: String;
  dateOfBirth: Date;
  mobileNo: Number;
  nationality: String;
  dateOfJoining: Date;
  department: String;
  gender: String;
  active: Boolean;
  address: {
    address_line1: String;
    address_line2: String;
    city: String;
    state: String;
    pincode: Number;
  };
  fatherName: String;
  EmployeeNo: Number;
  photo: String;
  qualification: String;
  CTC: Number;
  email: String;
  experience: any;
  yearOfExperience: Array<any>;
  emergencyContactNumber: Number;
  panNumber: any;
}
export interface department {
  department: string;
}
