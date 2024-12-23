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
        return await this.findOne({trackingId});
    }

    async createEvents(eventData: IEventModel): Promise<IEventModel>{
        return await this.create(eventData);
    }
    
}