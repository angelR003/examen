import Gym from '../models/gym.model.js';
const gymDao = {};



gymDao.getAll = async () => {
    return await Gym.find();
};

gymDao.getxNum = async (numCliente) => {
    return await Gym.find({ numCliente: numCliente });
};

gymDao.insert = async (gym) => {
    return await Gym.create(gym);
};


gymDao.update = async (numCliente, gym) => {
    return await Gym.findOneAndUpdate({ numCliente }, { $set: gym }, { new: true });
}

gymDao.delete = async (numCliente) => {
    return await Gym.findOneAndDelete({ numCliente });
}
export default gymDao;

