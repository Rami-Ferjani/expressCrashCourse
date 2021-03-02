const express=require('express')
const router=express.Router();
const members=require('../../Members')
const uuid=require('uuid')

//Gets all Members
router.get('/',(req,res)=>{
    res.json(members)
    });


//get Single member
router.get('/:id', (req,res)=> {
        //res.send(req.params.id)
        const found=members.some(member=>member.id === parseInt(req.params.id));
        if(found){
        res.json(members.filter(member=>member.id=== parseInt(req.params.id)))}
        else {
            res.status(400).json({ msg: 'Member not found'});
        }
    });

    //Create Member
    router.post('/', (req, res) => {
        
        const newMember={
            id:uuid.v4(),
            name:req.body.name,
            email:req.body.email,
            status:'active'
        }
        if(!newMember.name|| !newMember.email){
           return  res.status(400).json({msg:'Please include a name and email'})
        }
        members.push(newMember);
        res.json(members);     
    });

    //update member
    router.put('/:id', (req,res)=> {
        //res.send(req.params.id)
        const found=members.some(member=>member.id === parseInt(req.params.id));
        if(found){
        const updMember=req.body;
        members.forEach(member =>{
            if(member.id ===parseInt(req.params.id)){
                member.name=updMember.name ? updMember.name: member.name;
                member.email=updMember.email ? updMember.email: member.email;
                res.json({ msg:'Member updated',member});
            }
        })
        }
        else {
            res.status(400).json({ msg: 'Member not found'});
        }
    });

    //Delete Member
    router.delete('/:id', (req,res)=> {
        //res.send(req.params.id)
        const found=members.some(member=>member.id === parseInt(req.params.id));
        if(found){
        res.json({ msg: 'Member deleted',
        members: members.filter(member=>member.id !== parseInt(req.params.id))});
         } else {
            res.status(400).json({ msg: 'Member not found'});
        }
    });

    module.exports=router;