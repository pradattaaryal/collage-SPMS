export interface Student {
  id: number;
  name: string;
  fatherName: string;
  motherName: string;
  gender: string;
  email: string;
  phoneNo: string;
  imageUrl?: string;
  dob?: string; // Optional if not always provided
  faculty?: string; // Optional
  semester?: string; // Optional
  password?:string;
}
