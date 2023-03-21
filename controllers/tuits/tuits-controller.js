import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    let newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
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

    tuits.push(newTuit);
    res.json(newTuit);
}
const findTuits  = (req, res) => {
    const type = req.query.type
    if(type) {
        const tuitsOfType = tuits
            .filter(tuit => tuit.type === type)
        res.json(tuitsOfType)
        return
    }
    res.json(tuits)
}
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitId = req.params.tid;
    tuits = tuits.filter(tuit =>
        tuit._id !== tuitId);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
