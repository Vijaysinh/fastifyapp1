module.exports = {
    querystring: {
        type: 'object',
        required: ['status'],
        properties: {
            status:{
                type:'boolean',
                default : 0,
                nullable: true
            }
        }
    },
    params: {},
    headers: {
        type: 'object',
        properties: {
            'id': { type: 'string' },
        },
    },
    response: {}
}
