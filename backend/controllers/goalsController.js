

// bring in our model

import Goal from "../model/goalModel.js"
import User from "../model/userModel.js"
  // @desc get  goals
    // @route GET /api/goals/
    // @access private

export const getGoals= async (req, res)=>{

    // get our goals through our mongoose model
    // because we use protect middleware we have to match the id

    const goals=await Goal.find({user:req.user.id});
    res.status(200).json(goals)


}

  // @desc set  goals
    // @route POST /api/goals/
    // @access private


export const setGoals= async (req, res)=>{
    // res.status(200).json({msg:"set goals"})
    // console.log(req.body);
    //  SETTING UP OUR ERROR HANDLER IF THE IS NO BODY
    if(!req.body.text) {
        res.status(400)
        // we will configure this using middleware
        throw new Error('please add a text field')
    }

    // if no error then we want to post  our goals

    const goal=await Goal.create({
        text:req.body.text,
        user:req.user.id
    })
    res.json(goal);
}

    // @desc update  goals
    // @route PUT /api/goals/:id
    // @access private


export const updateGoals= async (req, res)=>{
 const goal=  await Goal.findById(req.params.id)

 if(!goal){
    res.status(400)
    throw new Error('goal not found')

    // now let us make in such a way that no user wil be able to delete each other goal

    // get the user id and compare it will the user id in the goal model since they relate to each other
    const user=User.findById(req.user.id);

    // first check if the user exist before comparing their ids
    if(!user){
        res.status(401).json('User not found');
    }

    
    // make sure the logged in user matches the user goal using or comparing their ids
    if(goal.user.toString()!==user.id){
        res.status(401).json("User not authorized");
    }

 }

 const updatedGoals=await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new:true,//this option create a goal if it doesn't exist
 })

 res.status(200).json(updatedGoals)
    // @desc delete goals
    // @route DELETE /api/goals/:id
    // @access private


}

export const deleteGoals= async (req, res)=>{
    // let us delete our goals here

    const goal=await Goal.findById(req.params.id);
    if(!goal) return res.status(404).json("goal not found");

    // get users id from the user mode and compare with that from the user id in  the goal model

    const user=User.findById(req.user.id);

    if(!user){
        res.status(401).json("user not found")
    }

    // compare their ids]
    if(goal.user.id.toString()!==user.id){
        res.status(401).status("user not authorized");
    }

// else if there is a goal we want to delete it

//  OR SIMPLY USE GOALS.REMOVE()
// goal.remove()

const deleteGoal=await Goal.findByIdAndDelete(req.params.id);
res.status(200).json(deleteGoal)

}

