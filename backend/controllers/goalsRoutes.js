

// bring in our model

import Goal from "../model/goalModel.js"
  // @desc get  goals
    // @route GET /api/goals/
    // @access private

export const getGoals= async (req, res)=>{

    // get our goals through our mongoose model

    const goals=await Goal.find({});
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
        text:req.body.text
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
    res.status(200).json({msg:"delete goals"});
}

