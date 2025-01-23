 import { BaseRepository } from "../base/BaseRepository";
 import { Teacher } from "../../core/domain/entity/Teacher.entity";
 
 class TeacherRepository extends BaseRepository<Teacher> {
   constructor() {
     super();
     this.collection = "Teacher";
   }
 
   registerTeacher(formData: any) {
     return super.create(formData);
   }
   GetAll() {
     return super.getMany();
   }
   getTeacherById(id:string){
     return super.get(id)
   }
   deleteTeacher(id:string){
     return super.delete(id)
   }
 }
 
 export default TeacherRepository;
 