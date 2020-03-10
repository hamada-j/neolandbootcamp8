const mongoose = require('mongoose');

// const connUrl = 'mongodb://usuario:password@127.0.0.1:puerto/neoland';

const connUrl = 'mongodb://127.0.0.1/neoland';

mongoose.connect(connUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});