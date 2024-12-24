import EventsRepository from "../repositories/events.repository";
import { IEventModel } from "../types/IEventModel";

class EventsSerrvice {
  async createEvent(eventData: IEventModel): Promise<IEventModel> {
    try {
      if (!eventData?.name || !eventData?.user_id) {
        throw new Error("Invalid event data");
      }
      const event = await EventsRepository.createEvents(eventData);
      return event;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async getAllEvents(): Promise<IEventModel[]> {
    try {
      const events = await EventsRepository.findAllEvents();
      if (events.length === 0) {
        return [];
      }
      return events;
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async getEvenByTrackingId(trackingId: string): Promise<IEventModel | null> {
    try {
      if (!trackingId) {
        throw new Error("Invalid trackingId");
      }
      const event = await EventsRepository.findByTrackingId(trackingId);
      return event;
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async getEventByName(eventName: string): Promise<IEventModel | null> {
    try {
      if (!eventName) {
        throw new Error("Invalid eventName");
      }
      const event = await EventsRepository.findByEventName(eventName);
      return event;
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async getEventsByUser(userId: string): Promise<IEventModel[]> {
    try {
      if (!userId) {
        throw new Error("Invalid userId");
      }
      const events = await EventsRepository.findAllEventsByUser(userId);
      return events;
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async deleteEvent(trackingId: string): Promise<IEventModel | null> {
    try {
      if (!trackingId) {
        throw new Error("Invalid trackingId");
      }
      const event = await EventsRepository.deleteById(trackingId);
      return event;
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async deleteManyEvents(eventIds: string[]): Promise<void> {
    try {
      if (!eventIds || !Array.isArray(eventIds) || eventIds.length === 0) {
        throw new Error("Invalid eventIds");
      }
      await EventsRepository.deleteManyEvents(eventIds);
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async updateEvent(trackingId: string, eventData: IEventModel): Promise<IEventModel | null> {
    try {
      if (!trackingId || !eventData) {
        throw new Error("Invalid trackingId or eventData");
      }
      const event = await EventsRepository.updateEvent(trackingId, eventData);
      return event;
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new EventsSerrvice();
