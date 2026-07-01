import employee from '../database/data.js'

const getUser = (req,res) => {
    try {
        res.status(200).json({
            data: employee,
            success:true,
            message:'data fetched successfully...'
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to get data', error
        })
        
    }
}



// iska api bnane ke liye isko export kar rhe hai ab and isko fir import karlenge routes/ me
export {getUser}