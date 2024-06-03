import { primaryKey } from "drizzle-orm/mysql-core";
import { integer } from "drizzle-orm/pg-core";
import {pgTable, serial ,text, varchar} from "drizzle-orm/pg-core";


export const userTable  =pgTable("users",{
    id: serial("id").primaryKey(),
    fullname: text("fullname"),
    email: varchar("email", {length: 255}),
    phone: varchar("phone", {length: 11}),
    address: varchar("address", {length: 255}),
    score:integer("score"),

})

export const profilesTable  =pgTable("profiles",{
    id: serial("id").primaryKey(),
    bio: varchar("bio",{length: 255}),
    userId: integer("userId").notNull().references(() =>userTable.id,{onDelete:"cascade"}),
});


export type TIuser = typeof userTable.$inferInsert;
export type Tsuser = typeof userTable.$inferSelect;
export type TSprofile = typeof profilesTable.$inferInsert;
export type TIprofile = typeof profilesTable.$inferSelect;

export type Tprofile ={ 
    bio:string,
    userId:number
}
