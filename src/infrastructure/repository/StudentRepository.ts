import { BaseRepository } from "../base/BaseRepository"
import {Student} from '../../core/domain/entity/Student.entity'

class StudentRepository extends BaseRepository<Student>{
    private setCollection(collection: string) {
        this.collection = collection;
      }
      registerStudent(formData:any) {
        this.setCollection("student");
        return super.create(formData);
      }
}

export default StudentRepository