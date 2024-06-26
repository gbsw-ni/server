import { Router } from "express"

const router: Router = Router()
const friendController = require('../../api/friend/friendController')

router.post('/:userId/apply', friendController.applyFriend)
router.get('/:userId/list', friendController.findFriend)
router.get('/:userId/applied', friendController.findApplier) // 나한테 친추 건 사람 목록
router.patch('/:userId1/:userId2', friendController.acceptApply)
router.get('/search', friendController.searchUser)
router.delete('/:userId1/:userId2', friendController.deleteFriend)

module.exports = router