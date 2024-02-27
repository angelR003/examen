import gymDao from '../dao/gym.dao.js';

export const getAll = (req, res) => {
    gymDao.getAll()
    .then(gyms => {
        res.render('../SRC/views/index',{gyms: gyms});
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
}


export const getxNum = (req, res) => {
    gymDao.getxNum(req.params.numCliente)
    .then(gyms => {
        res.render('../SRC/views/index',{gyms: gyms});
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
}
    
export const insert = (req, res) => {
    gymDao.insert(req.body)
    .then(gym => {
        res.render('../SRC/views/index',{gyms: gym});
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
}


export const update = async (req, res) => {
    try {
        const gym = req.body;
        const result = await gymDao.update(req.params.numCliente, gym);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const remove = (req, res) => {
    gymDao.remove(req.params.numCliente)
    .then(() => {
        res.json({ message: 'Gym deleted!' });
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
}
  


