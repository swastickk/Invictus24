import { NextResponse } from "next/server";
import connectDb from "@/server/src/helper/config";
import Event from "@/app/models/event";
import Team from "@/app/models/team";
import User from "@/app/models/user";

connectDb();
// event schema -->
export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {eventName} = reqBody;
        
        const event = await Event.findOne({name: eventName});

        if(!event){
            return NextResponse.json({error: "Event not exist"},{status: 400});
        }
        else{
            const teams = await Team.find({eventName: event._id,status: true}).populate('teamLeader').populate('eventName').populate('member');

            return NextResponse.json(teams);
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}
