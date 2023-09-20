const express = require("express");
const router = express.Router();
const { getAllMember, getMember, createMember, updateMember, deleteMember } = require("../controller/member.js")

// Define All Router
router.get('/', getAllMember);
router.get('/:id', getMember);
router.post('/', createMember);
router.patch('/:id', updateMember);
router.delete('/:id', deleteMember);

module.exports = router;