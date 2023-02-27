
  // @desc get  goals
    // @route GET /api/goals/
    // @access private

export const getGoals= async (req, res)=>{
    res.status(200).json({msg:"get goals"})
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
}

    // @desc update  goals
    // @route PUT /api/goals/:id
    // @access private


export const updateGoals= async (req, res)=>{
    res.status(200).json({msg:"update goals"})

    // @desc delete goals
    // @route DELETE /api/goals/:id
    // @access private
}

export const deleteGoals= async (req, res)=>{
    res.status(200).json({msg:"delete goals"});
}


