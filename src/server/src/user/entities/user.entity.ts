import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updateTime: Date;
}
