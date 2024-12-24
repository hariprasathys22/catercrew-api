import { Request, Response } from "express";
import EventsService from "../services/EventsService";


export const createEvent = async (req: Request, res: Response) => {
    try {
        const event = await EventsService.createEvent(req.body);
        res.status(201).json(event);
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
}

export const getAllEvents = async (req: Request, res: Response) => {
    try{
        const event = await EventsService.getAllEvents();
        res.status(200).json(event);
    }
    catch(e:any){
        res.status(400).json({error: e.message});
    }
}

export const getEventByTrackingId = async (req: Request, res: Response) => {
    try{
        const event = await EventsService.getEvenByTrackingId(req.params.trackingId);
        res.status(200).json(event);
    }catch(e:any){
        res.status(400).json({error: e.message});
    }
}

export const getEventByName = async (req: Request, res: Response) => {
    try{
        const event = await EventsService.getEventByName(req.params.eventName);
        res.status(200).json(event);
    }catch(e:any){
        res.status(400).json({error: e.message});
    }
}

export const getEventsByUser = async (req: Request, res: Response) => {
    try{
        const event = await EventsService.getEventsByUser(req.params.userId);
        res.status(200).json(event);
    }catch(e:any){
        res.status(400).json({error: e.message});
    }
}

export const deleteEvent = async (req: Request, res: Response) => {
    try{
        const event = await EventsService.deleteEvent(req.params.trackingId);
        res.status(200).json(event);
    }catch(e:any){
        res.status(400).json({error: e.message});
    }
}

export const deleteManyEvents = async (req: Request, res: Response) => {
    try{
        const event = await EventsService.deleteManyEvents(req.body.eventIds);
        res.status(200).json(event);
    }catch(e:any){
        res.status(400).json({error: e.message});
    }
}

export const updateEvent = async (req: Request, res: Response) => {
    try {
        const event = await EventsService.updateEvent(req.params.trackingId, req.body);
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
