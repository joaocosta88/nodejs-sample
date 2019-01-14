var config = require('../../knexfile')
var knex = require('knex')(config)


module.exports = ({
    tableName = '',
    timeout = 1000
}) => {

    if (!tableName)
        throw "Please define the target table name";

    const create = props => 
        knex.insert(props)
            .into(tableName)
            .timeout(timeout);

    const findAll = () => 
        knex.select('*')
            .from(tableName)
            .timeout(timeout);

    const find = filters => 
        knex.select('*')
            .from(tableName)
            .where(filters)
            .timeout(timeout);

    var findById = id =>
        knex.select('*')
            .from(tableName)
            .where({id})
            .timeout(timeout)

    const update = (id, props) => {
        delete props.id //avoid id being changed

        return knex.update(props)
                .from(tableName)
                .where({id})
                .timeout(timeout)
    }

    const remove = id => 
        knex.del()
            .from(tableName)
            .where({id})
            .timeout(timeout)

    return {
        create,
        findAll,
        find,
        findById,
        update,
        remove
    }
}