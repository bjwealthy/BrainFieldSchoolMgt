import { Events } from "../models/eventsSchema.js";

export const createEvents = async (req, res, next) => {
    console.log(req.body);
    const { events } = req.body;
    try {
        if (!events) {
            return next("Please fill all form fields", 400);
        }
        await Student.create({ events })
        res.status(200).json({
            success: true,
            messsage: "Event is created!"
        });
    } catch (error) {
        next(err)
    }
}

export const getAllEvents = async (req, res, next) => {

    try {
        const event = await Events.find();
    res.status(200).json({
        success: true,
        event,
    })
    } catch (error) {
        next(err)
    }
}

