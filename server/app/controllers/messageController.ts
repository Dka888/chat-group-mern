import { Request, Response } from 'express';
import Message from '../models/Message';
import { format } from 'date-fns';

class MessageController {
    public async createMessage(req: Request, res: Response): Promise<void> {
        const { userId, channelId, content } = req.body;
        try {
            const formattedDate = format(new Date(), 'dd-MM-yyyy');
            const newMessage = await Message.create({ userId, channelId, content, created: formattedDate });
            res.status(202).json(newMessage);
        } catch (e) {
            console.log(e);
            res.status(500).json('server error')
        }
    }

    public async getMessages(req: Request, res: Response): Promise<void> {
        try {
            const messages = await Message.find();
            res.json(messages);
        } catch (e) {
            res.json('wrong');
        }
    }

    public async getChannelsMessages(req: Request, res: Response): Promise<void> {
        const {channelId} = req.params;
        try {
            const allMesaages = await Message.find();
            const messages = allMesaages.filter(mes => String(mes.channelId) === channelId);
            res.status(200).json(messages)
        } catch(e) {
            res.status(500).json('error');
        }
    }
}

export default new MessageController();