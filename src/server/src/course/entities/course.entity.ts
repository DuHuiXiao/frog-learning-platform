import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "course"
})
export class Course {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;
  @Column({ type: "varchar", length: 500 })
  name: string;
  @Column({ type: "varchar", length: 1000 })
  description: string;
  @Column({ type: 'varchar', length: 5000 })
  image: string;
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdTime: Date;
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedTime: Date;
}
