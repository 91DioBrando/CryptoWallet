import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('user_accounts')
export class UserAccount {
    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Column({ type: 'text', nullable: false })
    pin: string; 

    @CreateDateColumn()
    created_at: Date;
}