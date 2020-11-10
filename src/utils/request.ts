export const BASE_URL = ''

export function Extract(d: { data: any; message: any; }){
    return {
        'data': d.data,
        'message': d.message
    };
}
