import * as tuitsDao from './tuits-dao.js'


const createTuit = async (req, res) => {
    let newTuit = req.body;

    newTuit.likes = 0;
    newTuit.liked = false;

    // add
    newTuit.userName = "NASA";
    newTuit.handle = "@nasa";
    newTuit.image =  "nasa.png";
    newTuit.topic = "Space";
    newTuit.title = "Nasa Crew-1 Mission";
    newTuit.time = "2h";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    // add

    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    const type = req.query.type
    if(type) {
        const tuitsOfType = tuits
            .filter(tuit => tuit.type === type)
        res.json(tuitsOfType)
        return
    }
    res.json(tuits)
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitId = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitId);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
