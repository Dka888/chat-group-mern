import {Request, Response} from 'express';
import Channel from '../models/Channels';

class ChannelController {
    public async createChannel(req: Request, res: Response): Promise<void> {
        const {title, description} = req.body
        try {
            const newChannel = await Channel.create({ title, description });
            res.status(200).json(newChannel);
        } catch(e) {
            res.status(500).json('error');
        }
    }

    public async getChannel(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        try {
            const channel = await Channel.findById({_id: id});
            res.status(200).json(channel);
        } catch(e) {
            res.status(500).json("errror")
        }
    }

    public async getAllChannels(req: Request, res: Response): Promise<void> {
        try {
            const channels = await Channel.find();
            res.status(200).json(channels);
        } catch(e) {
            res.status(500).json("errror")
        }
    }

    public async deleteChannel(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        try {
            const channel = await Channel.findByIdAndDelete({_id: id});
            res.status(200).json(channel);
        } catch(e) {
            res.status(500).json("error")
        }
    }
}

export default new ChannelController();