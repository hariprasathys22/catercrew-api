import express from 'express';
import { createEvent, deleteEvent, deleteManyEvents, getAllEvents, getEventByName, getEventByTrackingId, getEventsByUser, updateEvent } from '../controllers/EventsController';

const router = express.Router();

router.post("/createEvent", createEvent);
router.get("/getAllEvents", getAllEvents);
router.get("/getEventByTrackingId/:trackingId", getEventByTrackingId);
router.get("/getEventByName/:eventName", getEventByName);
router.get("/getEventsByUser/:userId", getEventsByUser);
router.delete("/deleteEvent/:trackingId", deleteEvent);
router.delete("/deleteManyEvents", deleteManyEvents);
router.put("/updateEvent/:trackingId", updateEvent);

export default router;