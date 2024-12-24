import { IEventModel } from "../types/IEventModel";
import BaseRepository from "./base.repository";
import Events from "../models/EventModel";


class EventsRepository extends BaseRepository<IEventModel>{
    constructor(){
        super(Events)
    }
    async findByEventName(eventName: string): Promise<IEventModel | null>{
        return await this.findOne({eventName});
    }

    async findByTrackingId(trackingId: string): Promise<IEventModel | null>{
        return await this.findById(trackingId);
    }

    async createEvents(eventData: IEventModel): Promise<IEventModel>{
        return await this.create(eventData);
    }
    async findAllEventsByUser(userId: string): Promise<IEventModel[]> {
        return await this.find({ userId }); // Filters events by userId
    }
    async findAllEvents(): Promise<IEventModel[]>{
        return await this.find();
    }
    async deleteById(trackingId: string): Promise<IEventModel | null> {
        return await this.deleteById(trackingId);
    }
    async deleteManyEvents(eventIds: string[]): Promise<void>{
        if(!eventIds|| !Array.isArray(eventIds) || eventIds.length === 0){
            throw new Error("Invalid eventIds");
        }
        await this.deleteMany({_id: {$in: eventIds}});
    }
    async updateEvent(trackingId: string, eventData: IEventModel): Promise<IEventModel | null>{
        return await this.updateOne({trackingId}, eventData);
    }
}

export default new EventsRepository;