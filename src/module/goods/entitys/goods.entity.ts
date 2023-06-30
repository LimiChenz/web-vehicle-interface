import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'biz_goods' }) // 替换为实际的表名
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  wait_verify_details: string;

  @Column({ type: 'int', default: 0 })
  visits: number;

  @Column({ type: 'int', default: 0 })
  virtual_stock: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  video_url: string;

  @Column({ type: 'int', default: 0 })
  version: number;

  @Column({ type: 'decimal', precision: 18, scale: 15, default: 0 })
  unit_volume: number;

  @Column({ type: 'varchar', length: 64, nullable: false, default: '' })
  team_name: string;

  @Column({ type: 'int', nullable: false, default: 0 })
  team_id: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: false,
    default: -1.0,
  })
  tax_rate: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  s_pic: string;

  @Column({ type: 'int', nullable: true, default: 0 })
  stock_threshold: number;

  @Column({ type: 'int', nullable: true })
  step_num: number;

  @Column({ type: 'varchar', length: 32, nullable: true })
  state: string;

  @Column({ type: 'text', nullable: true })
  specification: string;

  @Column({ type: 'decimal', nullable: true })
  sort: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  sold_num: number;

  @Column({ type: 'varchar', length: 16, nullable: true })
  shelf: string;

  @Column({ type: 'int', nullable: false, default: 0 })
  sales_manager_staff_id: number;

  @Column({ type: 'varchar', length: 64, nullable: true })
  sales_manager: string;

  @Column({ type: 'int', nullable: false, default: 1 })
  sales_alam: number;

  @Column({ type: 'bigint', nullable: true })
  reseller_price: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: false,
    default: 0.0,
  })
  recp_excise_tax: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  real_sold_num: number;

  @Column({ type: 'varchar', length: 128, nullable: true })
  product_cert_img3: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  product_cert_img2: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  product_cert_img1: string;

  @Column({ type: 'varchar', length: 64, nullable: false, default: '新品' })
  produce_state: string;

  @Column({ type: 'smallint', nullable: true })
  produce_days: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pic4: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pic3: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pic2: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pic1: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pic: string;

  @Column({ type: 'enum', enum: ['offline', 'online'] })
  payment_term_state: string;

  @Column({ type: 'varchar', length: 32, nullable: false })
  payment_term_name: string;

  @Column({ type: 'varchar', length: 16, nullable: false })
  payment_term_code: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  operator: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  operate_type: string;

  @Column({ type: 'int', nullable: false })
  operate_time: number;
}
