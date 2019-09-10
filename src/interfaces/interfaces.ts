export interface ITabbar {
    title: string,
    path: string,
    iconfont: string,
    id: number
}

export interface IHomeSwiperItem {
    click_event: string,
    slide_thumb: string,
    slide_title: string,
    slide_url: string,
    hover_title: string,
    silde_original: string,
    slide_en_title: string,
    end_time: number,
    number_id: number,
    position: number,
    seller_id: number,
    slide_id: number,
    sort: number,
    start_time: number,
    status: number
}

export interface IHomeNavItem {
    ad_code: string,
    ad_link: string,
    ad_name: string
    ad_title: string
}

export interface IState {
    showHasApp: boolean,
    homeSwiper: IHomeSwiperItem[],
    homeNav: IHomeNavItem[]
}
