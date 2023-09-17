import { Router } from 'express';
import ChannelController from '../controllers/channelController';

const router = Router();

router.post('/', ChannelController.createChannel);

router.get('/', ChannelController.getAllChannels);

router.get('/:id', ChannelController.getChannel);

router.delete('/:id', ChannelController.deleteChannel);

export default router;