import db from "./drizzle/db";
import { TIprofile, TIuser, TSprofile, Tsuser} from "./drizzle/schema";
import {eq, gt, like} from "drizzle-orm";
import {profilesTable, userTable} from "./drizzle/schema"



const getUsers  = async ():Promise<TIuser[]|null> => {
    return await db.query.userTable.findMany();
}
// get a single user
const getUser = async(id:number) =>{
    return await db.query.userTable.findFirst();
}
//querry

const getProfiles = async (): Promise<TIprofile[] | null> => {
    return await db.select().from(profilesTable); // Correct syntax for querying the profilesTable
}
// get a single profile
const getProfile = async(id:number) => {
    return await db.query.profilesTable.findFirst();
}



//insert
const createUsers = async (user: TIuser)=> {
    await db.insert(userTable).values({
        address:user.address,
        email:user.email,
        fullname:user.fullname,
        phone:user.phone,
        score:user.score

    }).returning();
}

const createUserProfile = async (profile:TIprofile) => {
    await db.insert(profilesTable).values({
        bio:profile.bio,
        userId:profile.userId
    }).returning();
}


   
// update
const updateUser = async (user: TIprofile) => {
    const { bio } = user;
    await db.update(profilesTable).set({ bio }).where(eq(profilesTable.id, user.id));
  }
//delete
const deleteUser = async (id: number) => {
    await db.delete(profilesTable).where(eq(profilesTable.id, id));
  }
  
//filter


// console.log("await getUsers")
async function main(){
    console.log(await getUsers())
}
main();