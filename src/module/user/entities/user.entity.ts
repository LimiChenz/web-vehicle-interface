import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_info')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', type: 'varchar', nullable: false, default: '' })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', nullable: false, default: '' })
  lastName: string;

  @Column({ default: true, name: 'is_active', type: 'boolean' })
  isActive: boolean;

  @Column({ default: true, name: 'is_staff', type: 'boolean' })
  staff: string;

  @Column({ name: 'avatar', nullable: true })
  avatar: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'password', type: 'varchar', nullable: false })
  password: string;

  @Column({ name: 'phone', nullable: false, type: 'varchar', length: 11 })
  phone: string;

  @Column({ name: 'address', nullable: true })
  address: string;

  @Column({ name: 'birthday', nullable: true })
  birthday: string;

  // 1男 2女
  @Column({ name: 'sex', nullable: false, type: 'int' })
  sex: string;

  @Column({ name: 'role', nullable: false, default: 'normal' })
  role: string;

  @Column({ name: 'is_delete', nullable: true, type: 'int', default: 0 })
  is_delete: number;
}
