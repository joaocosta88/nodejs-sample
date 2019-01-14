const createRepo = require('../repository')

const tableName = "tweets"
const repo = createRepo({
    tableName
})

var create = props => {
    console.log("this is the new create", props);

    return repo.create();
}

module.exports = {
        ...repo,
        create
    }


