// import { Field, ID, ObjectType } from "type-graphql";
// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   OneToMany,
// } from "typeorm";
//
// @ObjectType()
// @Entity()
// export class User {
//   @Field((type) => ID)
//   @PrimaryGeneratedColumn({ name: "user_id" })
//   userId!: number;
//
//   @Field({ nullable: true })
//   @Column({ name: "display_name", type: "varchar", length: 255 })
//   displayName?: string;
//
//   @Field({ nullable: true })
//   @Column({ type: "varchar", length: 255, unique: true })
//   email?: string;
//
//   @Field({ nullable: true })
//   @Column({
//     name: "phone_number",
//     type: "varchar",
//     length: 20,
//     unique: true,
//     nullable: true,
//   })
//   phoneNumber?: string;
//
//   @Field({ nullable: true })
//   @Column({ name: "photo_url", type: "varchar", length: 255, nullable: true })
//   photoURL?: string;
//
//   @Field({ nullable: true })
//   @Column({ name: "provider_id", type: "varchar", length: 50 })
//   providerId?: string;
//
//   @Field({ nullable: true })
//   @Column({ type: "varchar", length: 100, unique: true })
//   uid?: string;
//
//   @Field({ nullable: true })
//   @CreateDateColumn({ name: "created_at" })
//   createdAt?: Date;
//
//   @Field({ nullable: true })
//   @UpdateDateColumn({ name: "updated_at" })
//   updatedAt?: Date;
// }
