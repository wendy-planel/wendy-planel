
import { Fetch } from './fetch'
import { PublishedFileDetail } from '../common/interface'


interface _PublishedFileDetail {
    result: number;
    resultcount: number;
    publishedfiledetails: PublishedFileDetail[];
}
interface PublishedFileDetailResponse {
    response: _PublishedFileDetail
}
async function read(mods: string[]): Promise<PublishedFileDetail[]> {
    const detail = await Fetch.post<PublishedFileDetailResponse>('/api/mod/publishedfiledetails', null, mods)
    return detail.response.publishedfiledetails
}


async function search(search_text: string): Promise<PublishedFileDetail[]> {
    const detail = await Fetch.post<PublishedFileDetailResponse>('/api/mod/search', null, {
        search_text: search_text,
    })
    return detail.response.publishedfiledetails
}


export const Mod = {
    read: read,
    search: search,
}