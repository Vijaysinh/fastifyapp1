module.exports = {
    body: {
        type: 'object',
        required: ['status'],
        properties: {
            status:{
                type:'boolean'
            }
        }
    },
    params: {},
    headers: {
        type: 'object',
    },
    response: {}
}
