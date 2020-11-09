export const BASE_URL = 'https://nbapi.kaixindeken.top/api/'

export function Extract(d: { data: any; message: any; }){
    return {
        'data': d.data,
        'message': d.message
    };
}
