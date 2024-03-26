"use server"
import fs from "fs/promises"

export const A = async (e) =>{
    console.log(e.get("name"))
    let d = fs.writeFile("dibesh.txt",`His Name is ${e.get("name")}`)
}