import { BaseRepository } from "../base/BaseRepository";
import { Student } from "../../core/domain/entity/Student.entity";

class StudentRepository extends BaseRepository<Student> {
  constructor() {
    super();
    this.collection = "Student";
  }

  registerStudent(formData: any) {
    return super.create(formData);
  }
  GetAllStudent() {
    return super.getMany();
  }
  getStudentDateById(id:string){
    return super.get(id)
  }
}

export default StudentRepository;
