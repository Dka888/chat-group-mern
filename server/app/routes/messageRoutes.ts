import { Router } from 'express';
import MessageController from '../controllers/messageController';

const router = Router();
router.post('/', MessageController.createMessage);
router.get('/', MessageController.getMessages);
router.get('/:channelId', MessageController.getChannelsMessages)
router.delete('/:id', );

export default router;