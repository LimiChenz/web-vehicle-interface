import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_info')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_Name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;
}
