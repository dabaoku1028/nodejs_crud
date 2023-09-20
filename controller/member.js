const Member = require("../model/member.js")

// Implement All CRUD Request
module.exports.getAllMember = async (req, res) => {
    try {
        const allMember = await Member.find();
        res.status(200).json(allMember);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.getMember = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        res.status(200).json(member);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.createMember = async (req, res) => {
    const member = req.body;
    const newMember = new Member(member);

    try {
        await newMember.save();
        res.status(200).json(newMember);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.updateMember = async (req, res) => {
    const member = await Member.findById(req.params.id);
    member.email = req.body.email

    try {
        await member.save();
        res.status(200).json(member);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.deleteMember = async (req, res) => {
    try {
        await Member.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Member Delete Successfully!!" })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}