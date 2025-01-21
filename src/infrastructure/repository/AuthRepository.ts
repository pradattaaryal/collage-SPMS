import { BaseRepository } from "../base/BaseRepository"
import {Student} from '../../core/domain/entity/Student.entity'

class AuthRepository extends BaseRepository<Student>{
    private setCollection(collection: string) {
        this.collection = collection;
      }
      Login(formData:any) {
        this.setCollection("Auth");
        return super.create(formData);
      }
}

export default AuthRepository